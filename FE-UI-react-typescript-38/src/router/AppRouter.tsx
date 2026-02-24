import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

import { PATHS } from "./paths";
import NotFound from "../pages/notFound/NotFound";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import ProductList from "../pages/products/ProductList";
import ProductDetail from "../pages/products/ProductDetail";
import { PageTransition } from "../component/PageTransition";

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path={PATHS.HOME}
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path={PATHS.ABOUT}
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path={PATHS.PRODUCTS}
          element={
            <PageTransition>
              <ProductList />
            </PageTransition>
          }
        />
        <Route
          path={PATHS.PRODUCT_DETAIL}
          element={
            <PageTransition>
              <ProductDetail />
            </PageTransition>
          }
        />
        <Route
          path={PATHS.NOT_FOUND}
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
