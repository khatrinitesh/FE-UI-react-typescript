import { lazy } from "react";
import type { RouteDefinition } from "../interface";
import { Paths } from "./path";

const Home = lazy(() => import("../pages/homePage/HomePage"));
const About = lazy(() => import("../pages/aboutPage/AboutPage"));
const Service = lazy(() => import("../pages/servicePage/ServicePage"));
const Contact = lazy(() => import("../pages/contactPage/ContactPage"));

export const appRoutes: RouteDefinition[] = [
  {
    path: Paths.HOME,
    element: <Home />,
    title: "Home Page",
    protected: false,
  },
  {
    path: Paths.ABOUT,
    element: <About />,
    title: "About Page",
    protected: false,
  },

  {
    path: Paths.SERVICES,
    element: <Service />,
    title: "Service Page",
    protected: false,
  },
  {
    path: Paths.CONTACT,
    element: <Contact />,
    title: "Contact Page",
    protected: false,
  },
];
