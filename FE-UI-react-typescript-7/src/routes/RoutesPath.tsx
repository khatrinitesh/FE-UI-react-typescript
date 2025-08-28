import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// Lazy public pages
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const AboutPage = lazy(() => import("../pages/aboutPage/AboutPage"));
const ServicePage = lazy(() => import("../pages/servicePage/ServicePage"));
const ContactPage = lazy(() => import("../pages/contactPage/ContactPage"));

// Lazy admin pages
const AdminLoginPage = lazy(
  () => import("../adminDashboard/adminLoginPage/AdminLoginPage")
);
const AdminDashboard = lazy(
  () => import("../adminDashboard/adminDashboard/AdminDashboard")
);

// Layouts (can stay static if used across routes)
import AuthLayout from "../adminDashboard/authLayout/AuthLayout";
import AdminLayout from "../adminDashboard/adminLayout/AdminLayout";
import MainLayout from "../layout/mainLayout/MainLayout";

// components
import PreloaderSpinner from "../components/preloaderSpinner/PreloaderSpinner";

const RoutesPath = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return (
    <BrowserRouter>
      <Suspense fallback={<PreloaderSpinner />}>
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesPath;
