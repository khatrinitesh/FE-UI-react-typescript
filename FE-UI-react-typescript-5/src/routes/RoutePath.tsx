import { lazy, Suspense } from "react";
import MainLayout from "./../layout/Mainlayout";
import { Route, Routes } from "react-router-dom";
import { Paths } from "./path";
import ErrorBoundariesPage from "../pages/errorBoundariesPage/ErrorBoundariesPage";

const HomePageSection = lazy(() => import("../pages/homePage/HomePage"));
const AboutPageSection = lazy(() => import("../pages/aboutPage/AboutPage"));
const ServicePageSection = lazy(
  () => import("../pages/servicePage/ServicePage")
);
const ContactPageSection = lazy(
  () => import("../pages/contactPage/ContactPage")
);

import type { RouteDefinition } from "../interface";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PreloaderSection from "../components/preloaderSection/PreloaderSection";

const routes: RouteDefinition[] = [
  {
    path: Paths.landing,
    element: <HomePageSection />,
    title: "Home",
    protection: false,
  },
  {
    path: Paths.about,
    element: <AboutPageSection />,
    title: "About",
    protection: false,
  },
  {
    path: Paths.service,
    element: <ServicePageSection />,
    title: "Service",
    protection: false,
  },
  {
    path: Paths.contact,
    element: <ContactPageSection />,
    title: "Contact",
    protection: false,
  },
  {
    path: Paths.notFound,
    element: <ErrorPage />,
    title: "Not Found",
    protection: false,
  },
];

const RoutePath = () => {
  return (
    <Suspense fallback={<PreloaderSection />}>
      <Routes>
        {routes.map(({ path, element }, idx) => {
          const isErrorPage = path === Paths.notFound;

          const wrappedElement = isErrorPage ? (
            <ErrorBoundariesPage>{element}</ErrorBoundariesPage>
          ) : (
            <MainLayout>
              <ErrorBoundariesPage>{element}</ErrorBoundariesPage>
            </MainLayout>
          );

          return <Route key={idx} path={path} element={wrappedElement} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default RoutePath;
