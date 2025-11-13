import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
import ErrorFallbackPage from "../pages/ErrorFallbackPage/ErrorFallbackPage";

const LayoutTwo = () => {
  return (
    <>
      <ErrorBoundary fallback={<ErrorFallbackPage />}>
        <Outlet />
      </ErrorBoundary>
    </>
  );
};

export default LayoutTwo;
