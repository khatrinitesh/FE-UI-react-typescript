// library
import { BrowserRouter, Routes, Route } from "react-router";
// constants
import { ROUTES } from "../constants/constants";
// pages and layout
import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Contact from "../pages/Contact";
import MainLayout from "../layout/MainLayout";
// error boundary
import ErrorBoundary from "../pages/ErrorBoundary";
// notfound page
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
            <Route path={ROUTES.SERVICE_DETAIL} element={<ServiceDetail />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Route>
          <Route element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default AppRoutes;
