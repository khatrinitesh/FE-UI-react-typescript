import { Route, Routes } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import HomePage from "../pages/homePage/HomePage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ServicesPage from "../pages/servicesPage/ServicesPage";
import PortfolioPage from "../pages/portfolioPage/PortfolioPage";
import ContactPage from "../pages/contactPage/ContactPage";

const AppRoutes = () => {
  return (
    <>
      <Mainlayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Mainlayout>
    </>
  );
};

export default AppRoutes;
