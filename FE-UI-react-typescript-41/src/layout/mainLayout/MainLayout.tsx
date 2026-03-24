import { Outlet } from "react-router";
import FooterSection from "../footerSection/FooterSection";
import HeaderSection from "../headerSection/HeaderSection";

const MainLayout = () => {
  return (
    <div className="appLayout grid grid-rows-[auto_1fr_auto] min-h-dvh">
      <HeaderSection />
      <div className="mainContent h-full ">
        <Outlet />
      </div>
      <FooterSection />
    </div>
  );
};

export default MainLayout;
