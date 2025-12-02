import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { PATHS } from "./path";
import MainLayout from "../components/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Contact = lazy(() => import("../pages/Contact"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.ABOUT} element={<About />} />
            <Route path={PATHS.PRODUCTS} element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path={PATHS.CONTACT} element={<Contact />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
