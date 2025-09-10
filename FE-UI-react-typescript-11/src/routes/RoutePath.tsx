import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PreloaderComponent from "../components/preloaderComponent/PreloaderComponent";
import ErrorBoundariesPage from "../pages/errorBoundariesPage/ErrorBoundariesPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

import { appRoutes } from "./appRoutes";
import ScrollToTopComponent from "../components/scrollTopComponent/ScrollTopComponent";
import Mainlayout from "./../layout/Mainlayout";

function RouterPath() {
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
                element={<Mainlayout>{element}</Mainlayout>}
              />
            ))}

            {/* Catch-all route for 404 */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundariesPage>
    </Router>
  );
}

export default RouterPath;
