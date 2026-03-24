import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import LoaderSection from "../components/UI/loaderSection/LoaderSection";
import Mainlayout from "../layout/mainLayout/Mainlayout";
import ErrorBoundary from "../pages/errorBoundary/ErrorBoundary";
import { PATHS } from "./../constants/constants";

const Home = lazy(() => import("../pages/homePage/HomePage"));
const About = lazy(() => import("../pages/aboutPage/AboutPage"));
const Product = lazy(() => import("../pages/productPage/ProductPage"));
const ProductDetail = lazy(
  () => import("../pages/productDetailpage/ProductDetailPage"),
);
const Contact = lazy(() => import("../pages/contactPage/ContactPage"));
const NotFound = lazy(() => import("../pages/notFoundPage/NotFoundPage"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        {/* ✅ Suspense wrapper */}
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-black">
              <LoaderSection />
            </div>
          }
        >
          <Routes>
            <Route element={<Mainlayout />}>
              <Route path={PATHS.HOME} element={<Home />} />
              <Route path={PATHS.ABOUT} element={<About />} />
              <Route path={PATHS.PRODUCT} element={<Product />} />
              <Route path={PATHS.PRODUCT_DETAIL} element={<ProductDetail />} />
              <Route path={PATHS.CONTACT} element={<Contact />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default AppRoutes;
