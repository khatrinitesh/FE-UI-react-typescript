import { Outlet } from "react-router-dom";
import FooterSection from "./FooterSection/FooterSection";
import HeaderSection from "./HeaderSection/HeaderSection";

const MainLayout = () => {
  return (
    <>
      <div className="appLayout  h-dvh  grid grid-rows-[auto_1fr_auto]">
        <HeaderSection />
        <div className="mainLayout">
          <Outlet />
        </div>
        <FooterSection />
      </div>
    </>
  );
};

export default MainLayout;
