import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="appLayout grid grid-rows-[auto_1fr_auto]">
        <Header />
        <div className="mainContent h-dull">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
