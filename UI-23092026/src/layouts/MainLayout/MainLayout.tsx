import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export default function MainLayout() {
  return (
    <div className="appLayout flex min-h-screen flex-col">
      <Header />

      <div className="mainContent flex-1 pt-20">
        <Outlet />
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
