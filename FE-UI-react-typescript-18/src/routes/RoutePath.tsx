import { lazy } from "react";
import type { IRoute } from "../interface";
import { PATH } from "./Path";

const Home = lazy(() => import("../pages/HomePage/HomePage"));
const About = lazy(() => import("../pages/AboutPage/AboutPage"));
const ServiceList = lazy(
  () => import("../pages/ServiceListPage/ServiceListPage")
);
const ServiceDetail = lazy(
  () => import("../pages/ServiceDetailpage/ServiceDetailpage")
);
const Contact = lazy(() => import("../pages/ContactPage/ContactPage"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

export const routes: IRoute[] = [
  { path: PATH.HOME, element: <Home />, title: "Home" },
  { path: PATH.ABOUT, element: <About />, title: "About" },
  { path: PATH.SERVICES, element: <ServiceList />, title: "Services" },
  {
    path: PATH.SERVICE_DETAIL,
    element: <ServiceDetail />,
    title: "Service Detail",
  },
  { path: PATH.CONTACT, element: <Contact />, title: "Contact" },
  { path: "*", element: <NotFound />, title: "Not Found" },
];
