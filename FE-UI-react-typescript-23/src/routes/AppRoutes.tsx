import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import PreloaderSpinner from "../components/PreloaderSpinner/PreloaderSpinner";

const LayoutOne = lazy(() => import("../layout/LayoutOne"));
const LayoutTwo = lazy(() => import("../layout/LayoutTwo"));

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const EnterDetailsPageOne = lazy(
  () => import("../pages/EnterDetailsPageOne/EnterDetailsPageOne")
);
const EnterDetailsPageTwo = lazy(
  () => import("../pages/EnterDetailsPageTwo/EnterDetailsPageTwo")
);
const EnterDetailsPageThree = lazy(
  () => import("../pages/EnterDetailsPageThree/EnterDetailsPageThree")
);
const EnterDetailsPageFour = lazy(
  () => import("../pages/EnterDetailsPageFour/EnterDetailsPageFour")
);
const EnterDetailsPageFive = lazy(
  () => import("../pages/EnterDetailsPageFive/EnterDetailsPageFive")
);
const EnterDetailsPageSix = lazy(
  () => import("../pages/EnterDetailsPageSix/EnterDetailsPageSix")
);
const EnterDetailsPageSeven = lazy(
  () => import("../pages/EnterDetailsPageSeven/EnterDetailsPageSeven")
);
const EnterDetailsPageEight = lazy(
  () => import("../pages/EnterDetailsPageEight/EnterDetailsPageEight")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
import LandscapeScreen from "../pages/NotFoundPage/LandscapeScreen";

// const RouteChangeOverlay = () => (
//   <>
//     <PreloaderSpinner />
//   </>
// );

const AppRoutesInner = () => {
  // const location = useLocation();
  // const [isRouteLoading, setIsRouteLoading] = useState(false);

  // Show overlay briefly on every path change
  // useEffect(() => {
  //   setIsRouteLoading(true);

  //   const timeout = setTimeout(() => {
  //     setIsRouteLoading(false);
  //   }, 2000); // adjust duration if you want

  //   return () => clearTimeout(timeout);
  // }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <LandscapeScreen />
      {/* {isRouteLoading && <RouteChangeOverlay />} */}

      <Suspense>
        <Routes>
          <Route element={<LayoutOne />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route element={<LayoutTwo />}>
            <Route path="/enter-details-1" element={<EnterDetailsPageOne />} />
            <Route path="/enter-details-2" element={<EnterDetailsPageTwo />} />
            <Route
              path="/enter-details-3"
              element={<EnterDetailsPageThree />}
            />
            <Route path="/enter-details-4" element={<EnterDetailsPageFour />} />
            <Route path="/enter-details-5" element={<EnterDetailsPageFive />} />
            <Route path="/enter-details-6" element={<EnterDetailsPageSix />} />
            <Route
              path="/enter-details-7"
              element={<EnterDetailsPageSeven />}
            />
            <Route
              path="/enter-details-8"
              element={<EnterDetailsPageEight />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AppRoutesInner />
    </BrowserRouter>
  );
};

export default AppRoutes;
