import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutOne from "../layout/LayoutOne";
import HomePage from "../pages/HomePage/HomePage";
import LayoutTwo from "../layout/LayoutTwo";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import EnterDetailsPageOne from "../pages/EnterDetailsPageOne/EnterDetailsPageOne";
import EnterDetailsPageTwo from "../pages/EnterDetailsPageTwo/EnterDetailsPageTwo";
import EnterDetailsPageThree from "../pages/EnterDetailsPageThree/EnterDetailsPageThree";
import EnterDetailsPageFour from "../pages/EnterDetailsPageFour/EnterDetailsPageFour";
import EnterDetailsPageFive from "../pages/EnterDetailsPageFive/EnterDetailsPageFive";
import EnterDetailsPageSix from "../pages/EnterDetailsPageSix/EnterDetailsPageSix";

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
            <Route path="/enter-details-1" element={<EnterDetailsPageOne />} />
            <Route path="/enter-details-2" element={<EnterDetailsPageTwo />} />
            <Route
              path="/enter-details-3"
              element={<EnterDetailsPageThree />}
            />
            <Route path="/enter-details-4" element={<EnterDetailsPageFour />} />
            <Route path="/enter-details-5" element={<EnterDetailsPageFive />} />
            <Route path="/enter-details-6" element={<EnterDetailsPageSix />} />
          </Route>

          {/* 404 – must come last */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
