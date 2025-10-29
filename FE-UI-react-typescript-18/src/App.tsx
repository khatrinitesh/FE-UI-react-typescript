import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundaries from "./components/ErrorBoundaries/ErrorBoundaries";
import { Suspense } from "react";
import MainLayout from "./layout/MainLayout";
import Preloader from "./components/Preloader/Preloader";
import { routes } from "./routes/RoutePath";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundaries>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route element={<MainLayout />}>
                {routes.map((r) => (
                  <Route key={r.path} path={r.path} element={r.element} />
                ))}
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundaries>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
