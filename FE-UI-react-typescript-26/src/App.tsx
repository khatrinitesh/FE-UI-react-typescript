import { useRoutes } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";
import ErrorBoundary from "./routes/ErrorBoundary";
import { Suspense } from "react";
import Preloader from "./components/UI/shared/Preloader";

function App() {
  const routes = useRoutes(AppRoutes);
  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>{routes}</Suspense>
    </ErrorBoundary>
  );
}

export default App;
