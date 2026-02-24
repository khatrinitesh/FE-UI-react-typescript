import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import { ROUTES } from "./path";
import MainLayout from "../components/layout/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/ProductList"));
const Contact = lazy(() => import("../pages/Contact"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));

export const AppRouter = () => {
  <>
    <BrowserRouter>
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <MainLayout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  </>;
};
