import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutOne from "../layout/LayoutOne";
import HomePage from "../pages/HomePage/HomePage";
import LayoutTwo from "../layout/LayoutTwo";
import EnterDetailsPage from "../pages/EnterDetailsPage/EnterDetailsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout 1 routes */}
          <Route element={<LayoutOne />}>
            <Route path="/" element={<HomePage />} />
          </Route>

          {/* Layout 2 routes */}
          <Route element={<LayoutTwo />}>
            <Route path="/enter-details" element={<EnterDetailsPage />} />
          </Route>

          {/* 404 – must come last */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
