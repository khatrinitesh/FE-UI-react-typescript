import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import PreLoaderSection from "../components/UI/preLoaderSection/PreLoaderSection";
import MainLayout from "../layout/mainLayout/MainLayout";
import { PATHS } from "./path";

// pages
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const AboutPage = lazy(() => import("../pages/aboutPage/AboutPage"));
const ProductListPage = lazy(
  () => import("../pages/productListPage/ProductListPage"),
);
const ProductDetailPage = lazy(
  () => import("../pages/productDetailPage/ProductDetailPage"),
);
const ContactPage = lazy(() => import("../pages/contactPage/ContactPage"));
const NotFound = lazy(() => import("../pages/notFoundPage/NotFoundPage"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PreLoaderSection />}>
        <Routes>
          {/* WITH Layout */}
          <Route element={<MainLayout />}>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path={PATHS.PRODUCTS} element={<ProductListPage />} />
            <Route
              path={PATHS.PRODUCT_DETAIL}
              element={<ProductDetailPage />}
            />
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
          </Route>

          {/* WITHOUT Layout */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
