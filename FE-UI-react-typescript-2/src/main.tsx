import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import ErrorBoundary from "./pages/errorBoundaryPageSection/ErrorBoundaryPageSection.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <App />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />
      </ErrorBoundary>
    </QueryClientProvider>
  </BrowserRouter>
);
