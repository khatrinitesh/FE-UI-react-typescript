import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="appLayout h-dvh grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="mainContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
