import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Paths } from "../routes/path";
import type { RouteDefinition } from "../interface";
import ErrorBoundariesPageSection from "../pages/errorBoundariesPageSection.tsx/ErrorBoundariesPageSection";
import ErrorPageSection from "../pages/errorPageSection/ErrorPageSection";
import MainLayout from "../layout/MainLayout";
import PreloaderSection from "../components/preloaderSection/PreloaderSection";

const HomePageSection = lazy(
  () => import("../pages/homePageSection/HomePageSection")
);
const AboutPageSection = lazy(
  () => import("../pages/aboutPageSection/AboutPageSection")
);
const ServicePageSection = lazy(
  () => import("../pages/servicePageSection/ServicePageSection")
);
const ContactPageSection = lazy(
  () => import("../pages/contactPageSection/ContactPageSection")
);

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
    element: <ErrorPageSection />,
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
            <ErrorBoundariesPageSection>{element}</ErrorBoundariesPageSection>
          ) : (
            <MainLayout>
              <ErrorBoundariesPageSection>{element}</ErrorBoundariesPageSection>
            </MainLayout>
          );

          return <Route key={idx} path={path} element={wrappedElement} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default RoutePath;
