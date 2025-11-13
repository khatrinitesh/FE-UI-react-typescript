import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// Lazy public pages
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const AboutPage = lazy(() => import("../pages/aboutPage/AboutPage"));
import ServicePage from "../pages/servicePage/ServicePage";

// Layouts (can stay static if used across routes)

import MainLayout from "../layout/MainLayout";
import PreloaderComponent from "../components/preloaderComponent/PreloaderComponent";
import ContactPage from "../pages/contactPage/ContactPage";
import AuthLayout from "../admin/authLayout/AuthLayout";
import AdminLoginPage from "../admin/adminLogin/AdminLogin";
import AdminLayout from "../admin/adminLayout/AdminLayout";
import AdminDashboard from "../admin/adminDashboard/AdminDashboard";
import ErrorPage from "../pages/errorPage/ErrorPage";

const RoutesPath = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return (
    <BrowserRouter>
      <Suspense fallback={<PreloaderComponent />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Admin Auth Route */}
          <Route
            path="/admin/login"
            element={
              <AuthLayout>
                <AdminLoginPage />
              </AuthLayout>
            }
          />

          {/* Admin Protected Route */}
          <Route
            path="/admin/dashboard"
            element={
              isAuthenticated ? (
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesPath;
