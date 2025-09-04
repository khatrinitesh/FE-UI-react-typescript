import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreloaderComponent from "../components/preloaderComponent/PreloaderComponent";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import ErrorBoundariesPage from "../pages/errorBoundariesPage/ErrorBoundariesPage";
import { appRoutes } from "./appRoutes";
import ScrollToTopComponent from "../components/scrollToTopComponent/ScrollToTopComponent";

const RoutePath = () => {
  return (
    <Router>
      <ScrollToTopComponent />
      <ErrorBoundariesPage>
        <Suspense fallback={<PreloaderComponent />}>
          <Routes>
            {appRoutes.map(({ path, element }, index) => (
              <Route
                key={index}
                path={path}
                element={<MainLayout>{element}</MainLayout>}
              />
            ))}

            {/* Catch-all route for 404 */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundariesPage>
    </Router>
  );
};

export default RoutePath;
