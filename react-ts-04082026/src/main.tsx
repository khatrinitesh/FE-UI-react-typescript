import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";

// routeTree may be generated at build time. Try to load it dynamically and
// fall back to a minimal route tree to avoid module-not-found errors.
let routeTree: any;

async function loadRouteTree() {
  try {
    const mod = await import("./routeTree.gen");
    routeTree = mod.routeTree;
  } catch (err) {
    // Fallback minimal route tree if the generated file is missing
    routeTree = {
      path: "/",
      // a very small placeholder route structure compatible with tanstack/router
      children: [],
    } as any;
    console.warn("./routeTree.gen not found — using fallback routeTree.", err);
  }
}

/**
 * TanStack Query configuration
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * TanStack Router configuration
 */
// Create router after loading the routeTree
let router: ReturnType<typeof createRouter>;

async function createAppRouter() {
  await loadRouteTree();
  router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
  });
}

/**
 * Register router types
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

/**
 * Find the root HTML element
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element was not found. Add <div id="root"></div> to index.html.',
  );
}

/**
 * Render the application
 */
// Initialize app
createAppRouter().then(() => {
  createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors closeButton duration={3000} />
    </QueryClientProvider>,
  );
});
