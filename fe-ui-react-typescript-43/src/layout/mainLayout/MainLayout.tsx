import { Outlet } from "react-router-dom";
import FooterSection from "../footerSection/FooterSection";
import HeaderSection from "../headerSection/HeaderSection";

const MainLayout = () => {
  return (
    <>
      <div className="appLayout grid grid-rows-[auto_1fr_auto] h-dvh">
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
