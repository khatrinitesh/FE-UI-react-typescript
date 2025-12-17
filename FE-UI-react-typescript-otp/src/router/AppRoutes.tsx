import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import CookieIndia from "../pages/CookieIndia";
import CookieIndoesia from "../pages/CookieIndoesia";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cookie-indonesia" element={<CookieIndoesia />} />
        <Route path="/cookie-india" element={<CookieIndia />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
