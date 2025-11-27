import { lazy } from "react";
import type { RouteObject } from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../layout/screens/Error";
import { PATHS } from "./path";

const Home = lazy(() => import("../layout/screens/Home"));
const About = lazy(() => import("../layout/screens/About"));
const Contact = lazy(() => import("../layout/screens/Contact"));

export const AppRoutes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: PATHS.ABOUT.replace("/", ""), element: <About /> },
      { path: PATHS.CONTACT.replace("/", ""), element: <Contact /> },
    ],
  },
];
