import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,

  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,

  defaultErrorComponent: ({ error }) => {
    console.error(error);

    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <section className="text-center">
          <h1 className="text-4xl font-bold">Something went wrong</h1>

          <p className="mt-3 text-gray-600">Please try again later.</p>
        </section>
      </main>
    );
  },

  defaultNotFoundComponent: () => (
    <main className="flex min-h-screen items-center justify-center px-5">
      <section className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <p className="mt-3 text-gray-600">Page not found.</p>
      </section>
    </main>
  ),

  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
