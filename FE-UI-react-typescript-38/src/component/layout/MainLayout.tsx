import type { ILayout } from "../../interface";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }: ILayout) => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#7D69AF] via-[#6E4A8E] to-[#5A3D7F] text-white">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
