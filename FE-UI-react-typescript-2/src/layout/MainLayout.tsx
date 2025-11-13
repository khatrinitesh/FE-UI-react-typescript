import FooterSection from "../components/footerSection/FooterSection";
import HeaderSection from "../components/headerSection/HeaderSection";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="appLayout w-full">
      <HeaderSection />
      <div className="mainContent">{Outlet}</div>
      <FooterSection />
    </div>
  );
};

export default MainLayout;
