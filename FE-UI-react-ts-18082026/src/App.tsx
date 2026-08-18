import { BrowserRouter, Route, Routes } from "react-router";

import MainLayout from "./layout/MainLayout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductDetail from "./pages/Products/ProductDetail";
import Products from "./pages/Products/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
