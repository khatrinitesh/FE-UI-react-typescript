import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "../components/ErrorBoundary/ErrorBoundary";
import ErrorFallbackPage from "../pages/ErrorFallbackPage/ErrorFallbackPage";
import FixedHeader from "../components/FixedHeader/FixedHeader";
import FixedFooter from "../components/FixedFooter/FixedFooter";

const LayoutTwo = () => {
  return (
    <>
      <div className="relative min-h-dvh  mt-22 bg-[#f7f3fc]">
        <div className="mainWrapper max-w-7xl mx-auto min-h-dvh px-6 pb-25 grid grid-rows-[auto_1fr_auto]">
          <FixedHeader />
          <ErrorBoundary fallback={<ErrorFallbackPage />}>
            <div className="max-w-2xl  px-4 pb-10 w-full mx-auto   ">
              <Outlet />
            </div>
          </ErrorBoundary>
          <FixedFooter />
        </div>
      </div>
    </>
  );
};

export default LayoutTwo;
