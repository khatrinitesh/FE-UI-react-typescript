import ReactDOM from "react-dom/client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  RouterProvider,
} from "@tanstack/react-router";
import { Toaster } from "sonner";

import "./index.css";
import { router } from "./routes/__root";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: true,
    },
    mutations: {
      retry: 1,
    },
  },
});

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
       <Toaster
    position="top-right"
    richColors
    expand
    closeButton
    duration={3000}
  />
    </QueryClientProvider>
  </>
);