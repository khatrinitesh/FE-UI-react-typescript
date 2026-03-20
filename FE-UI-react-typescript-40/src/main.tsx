import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import ErrorBoundary from "./components/UI/errorBoundary/ErrorBoundary.tsx";
import "./index.css";
import AppRouter from "./routes/AppRouter.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  </>,
);
