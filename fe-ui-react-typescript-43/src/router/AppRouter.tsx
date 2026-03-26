import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoaderSection from "../components/UI/loaderSection/LoaderSection";
import MainLayout from "../layout/mainLayout/MainLayout";

const Home = lazy(() => import("../pages/homePage/HomePage"));
const About = lazy(() => import("../pages/aboutPage/AboutPage"));
const Products = lazy(() => import("../pages/productPage/ProductPage"));
const ProductDetail = lazy(
  () => import("../pages/productDetailPage/ProductDetailPage"),
);
const Contact = lazy(() => import("../pages/contactPage/ContactPage"));
const NotFound = lazy(() => import("../pages/notFoundPage/NotFoundPage"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderSection />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
