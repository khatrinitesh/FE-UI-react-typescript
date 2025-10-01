import { lazy } from "react";

import PATHS from "./Path";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import LoginPage from "../pages/loginpage/LoginPage";

// Lazy load pages
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const AboutPage = lazy(() => import("../pages/aboutPage/AboutPage"));
const ServicePage = lazy(() => import("../pages/servicePage/ServicePage"));
const ContactPage = lazy(() => import("../pages/contactPage/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/errorPage/NotFoundPage"));

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <ProtectedRoute element={<HomePage />} />,
        protected: true,
      },
      {
        path: PATHS.ABOUT,
        element: <ProtectedRoute element={<AboutPage />} />,
        protected: true,
      },
      {
        path: PATHS.SERVICE,
        element: <ProtectedRoute element={<ServicePage />} />,
        protected: true,
      },
      {
        path: PATHS.CONTACT,
        element: <ProtectedRoute element={<ContactPage />} />,
        protected: true,
      },
    ],
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
