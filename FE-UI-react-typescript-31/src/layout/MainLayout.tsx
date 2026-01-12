import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="appLayout grid grid-rows-[auto_1fr_auto] bg-green-300 min-h-dvh">
      <Header />
      <div className="mainContent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
