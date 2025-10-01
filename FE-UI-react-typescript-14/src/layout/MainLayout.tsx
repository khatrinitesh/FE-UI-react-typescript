import { Outlet } from "react-router-dom";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection/HeaderSection";

const MainLayout = () => {
  return (
    <>
      <div className="appLayout h-dvh grid grid-rows-[auto_1fr_auto]">
        <HeaderSection />
        <div className="mainContent">
          <Outlet />
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default MainLayout;
