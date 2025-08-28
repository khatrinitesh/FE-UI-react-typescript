import FooterSection from "../footerSection/FooterSection";
import HeaderSection from "../headerSection/HeaderSection";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <div className="appLayout h-dvh grid grid-rows-[auto_1fr_auto]">
      <HeaderSection />
      {/* ✅ Toast notification container */}
      <Toaster position="top-center" />
      <div className="mainContent">
        <Outlet />
      </div>
      <FooterSection />
    </div>
  );
};

export default MainLayout;
