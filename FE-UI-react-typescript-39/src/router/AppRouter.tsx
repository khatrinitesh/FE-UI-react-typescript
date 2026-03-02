import { BrowserRouter, Route, Routes } from "react-router";
import { PATH } from "./path";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import MainLayout from "../components/layout/MainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.ABOUT} element={<About />} />
          <Route path={PATH.PRODUCTS} element={<Products />} />
          <Route path={PATH.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={PATH.CONTACT} element={<Contact />} />
        </Route>

        {/* 404 Outside Layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
