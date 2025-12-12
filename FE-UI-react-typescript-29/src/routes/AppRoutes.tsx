import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const MainLayout = lazy(() => import("../components/layout/MainLayout"));
const HomePage = lazy(() => import("../pages/Home"));
const PostDetailPage = lazy(() => import("../pages/PostDetail"));
const AboutPage = lazy(() => import("../pages/About"));
const ServicesPage = lazy(() => import("../pages/Service"));
const ContactPage = lazy(() => import("../pages/Contact"));
const ErrorPageC = lazy(() => import("../pages/ErrorPage"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/post-detail/:id", element: <PostDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
  {
    path: "/error",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorPageC error={new Error("An error occurred")} />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
