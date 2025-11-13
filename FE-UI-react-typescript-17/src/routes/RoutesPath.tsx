import { lazy, Suspense } from "react";
import type { RouteType } from "../interface";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import PreloaderSection from "../components/PreloaderSection/PreloaderSection";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MainLayout from "../layout/MainLayout";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const About = lazy(() => import("../pages/AboutPage/AboutPage"));
const ServiceList = lazy(
  () => import("../pages/ServiceListPage/ServiceListPage")
);
const ServiceDetail = lazy(
  () => import("../pages/ServiceDetailPage/ServiceDetailPage")
);
const Contact = lazy(() => import("../pages/ContactPage/ContactPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const ROUTES: RouteType[] = [
  { path: "/", element: <Home />, title: "Home" },
  { path: "/about", element: <About />, title: "About" },
  { path: "/services", element: <ServiceList />, title: "Service List" },
  {
    path: "/services/:id",
    element: <ServiceDetail />,
    title: "Service Detail",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
    isProtected: false,
  },
];

const RoutesPath = () => {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<PreloaderSection />}>
          <Routes>
            {/* Wrap in layout */}
            <Route element={<MainLayout />}>
              {ROUTES.map(({ path, element, isProtected }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    isProtected ? (
                      <PrivateRoute>{element}</PrivateRoute>
                    ) : (
                      element
                    )
                  }
                />
              ))}
            </Route>

            {/* Catch-all (no layout) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default RoutesPath;
