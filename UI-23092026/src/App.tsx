import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import LoaderSpinner from "./components/LoaderSpinner/LoaderSpinner";
import MainLayout from "./layouts/MainLayout/MainLayout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ServicePage = lazy(() => import("./pages/ServicePage/ServicePage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));
const CommentsPage = lazy(() => import("./pages/CommentsPage/CommentsPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  return (
    <Suspense fallback={<LoaderSpinner />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/comments" element={<CommentsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
