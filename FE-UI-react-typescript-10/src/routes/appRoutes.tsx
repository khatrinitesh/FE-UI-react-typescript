import { lazy } from "react";
import type { RouteDefinition } from "../interface";
import { PATHS } from "./path";

const Home = lazy(() => import("../pages/homePage/HomePage"));
const About = lazy(() => import("../pages/aboutPage/AboutPage"));
const ServiceList = lazy(
  () => import("../pages/serviceListPage/ServiceListPage")
);
const ServiceDetail = lazy(
  () => import("../pages/serviceDetailPage/ServiceDetailPage")
);
const Contact = lazy(() => import("../pages/contactPage/ContactPage"));

export const appRoutes: RouteDefinition[] = [
  {
    path: PATHS.HOME,
    element: <Home />,
    title: "Home Page",
    protected: false,
  },
  {
    path: PATHS.ABOUT,
    element: <About />,
    title: "About Page",
    protected: false,
  },

  {
    path: PATHS.SERVICES,
    element: <ServiceList />,
    title: "Service List Page",
    protected: false,
  },
  {
    path: PATHS.SERVICE_DETAIL,
    element: <ServiceDetail />,
    title: "Service Detail Page",
    protected: false,
  },
  {
    path: PATHS.CONTACT,
    element: <Contact />,
    title: "Contact Page",
    protected: false,
  },
];
