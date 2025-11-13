import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundariesPage from "../pages/errorBoundariesPage/ErrorBoundariesPage";
import { lazy, Suspense } from "react";
import LoaderSection from "../components/loaderSection/LoaderSection";
import MainLayout from "../layout/MainLayout";
import Paths from "./Path";
import ServiceDetailPage from "../pages/serviceDetailPage/ServiceDetailPage";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/homePage/HomePage"));
const About = lazy(() => import("../pages/aboutPage/AboutPage"));
const Services = lazy(() => import("../pages/servicePage/ServicePage"));
const Contact = lazy(() => import("../pages/contactPage/ContactPage"));
const ErrorPage = lazy(() => import("../pages/errorPage/ErrorPage"));

const RoutePath = () => {
  return (
    <Router>
      <ErrorBoundariesPage>
        <Suspense fallback={<LoaderSection />}>
          <Routes>
            {/* Routes with Layout */}
            <Route
              path={Paths.HOME}
              element={
                <MainLayout>
                  <Home />
                </MainLayout>
              }
            />
            <Route
              path={Paths.ABOUT}
              element={
                <MainLayout>
                  <About />
                </MainLayout>
              }
            />
            <Route
              path={Paths.SERVICES}
              element={
                <MainLayout>
                  <Services />
                </MainLayout>
              }
            />
            <Route
              path={`${Paths.SERVICES}/:id`}
              element={
                <MainLayout>
                  <ServiceDetailPage />
                </MainLayout>
              }
            />
            <Route
              path={Paths.CONTACT}
              element={
                <MainLayout>
                  <Contact />
                </MainLayout>
              }
            />

            {/* Standalone Error Pages (no layout) */}
            <Route path={Paths.ERROR} element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundariesPage>
    </Router>
  );
};

export default RoutePath;
