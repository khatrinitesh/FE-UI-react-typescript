import { Outlet } from "react-router";
import Footer from "../components/UI/shared/Footer";
import Navbar from "../components/UI/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="appLayout grid-rows-[auto_1fr_auto] grid h-dvh">
      <Navbar />
      <div className="mainContent ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
