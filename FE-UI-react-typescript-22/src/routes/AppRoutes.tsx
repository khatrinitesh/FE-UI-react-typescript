import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_PATHS } from "./RoutePaths";
import ServiceListPage from "../pages/Services/ServicesListPage/ServiceListPage";
import MainLayout from "../layout/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServiceDetailPage from "../pages/Services/ServiceDetailPage/ServiceDetailPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import ErrorPage from "../pages/Error/ErrorPage/ErrorPage";
import MinimalLayout from "../layout/MinimalLayout/MinimalLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: ROUTE_PATHS.HOME, element: <HomePage /> },
      { path: ROUTE_PATHS.ABOUT, element: <AboutPage /> },
      { path: ROUTE_PATHS.SERVICES, element: <ServiceListPage /> },
      { path: ROUTE_PATHS.SERVICE_DETAIL, element: <ServiceDetailPage /> },
      { path: ROUTE_PATHS.CONTACT, element: <ContactPage /> },
    ],
  },
  {
    element: <MinimalLayout />,
    children: [{ path: ROUTE_PATHS.ERROR, element: <ErrorPage /> }],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
