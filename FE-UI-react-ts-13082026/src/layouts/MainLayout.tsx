import { Outlet } from "@tanstack/react-router";
import Footer from "../components/layout/Footer/Footer";
import Header from "../components/layout/Header/Header";

const MainLayout = () => {
  return (
    <div className="appLayout flex min-h-dvh flex-col">
      <Header />
      <div className="mainContent flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
