import { Outlet } from "react-router-dom";
import type { MainLayoutProps } from "../interface";
import FooterSection from "./footerSection/FooterSection";
import HeaderSection from "./headerSection/HeaderSection";

const MainLayout = () => {
  return (
    <>
      <HeaderSection />
      <div className="mainContent grid grid-rows-[auto_1fr_auto] min-h-dvh">
        <Outlet />
      </div>
      <FooterSection />
    </>
  );
};

export default MainLayout;
