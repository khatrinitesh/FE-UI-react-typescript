import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoaderSection from "../components/UI/loaderSection/LoaderSection";
import MainLayout from "../layout/mainLayout/MainLayout";
import { PATHS } from "./path";

// Lazy Pages
const Home = lazy(() => import("../pages/homePage/HomePage"));
const Product = lazy(() => import("../pages/productPage/ProductPage"));
const ProductDetail = lazy(
  () => import("../pages/productDetailPage/ProductDetailPage"),
);
const Contact = lazy(() => import("../pages/contactPage/ContactPage"));
const NotFound = lazy(() => import("../pages/notFoundPage/NotFoundPage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderSection />}>
        <Routes>
          {/* Layout Wrapper */}
          <Route element={<MainLayout />}>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.PRODUCT} element={<Product />} />
            <Route path={PATHS.PRODUCT_DETAIL} element={<ProductDetail />} />
            <Route path={PATHS.CONTACT} element={<Contact />} />
          </Route>

          {/* No Layout (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
