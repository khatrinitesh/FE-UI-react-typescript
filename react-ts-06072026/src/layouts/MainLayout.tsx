import { Outlet } from "@tanstack/react-router";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PageTransition from "../components/common/PageTransition";


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;