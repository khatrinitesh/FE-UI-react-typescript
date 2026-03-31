import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import ErrorBoundary from "../pages/errorBoundary/ErrorBoundary";
import LoaderSection from "../components/UI/loaderSection/LoaderSection";
import MainLayout from "../layout/mainLayout/MainLayout";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";


const Home = lazy(() => import("../pages/homePage/HomePage"));
const Product = lazy(() => import("../pages/productPage/ProductPage"));
const ProductDetail = lazy(() => import("../pages/ProductDetailPage/ProcutDetailPage"));
const Contact = lazy(() => import("../pages/contactPage/ContactPage"));

const AppRouter = () => {
  return (
     <ErrorBoundary>
      <Suspense fallback={<LoaderSection />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default AppRouter
