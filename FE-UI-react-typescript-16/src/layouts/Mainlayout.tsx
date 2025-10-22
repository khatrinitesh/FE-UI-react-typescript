import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Modal from "../components/modal/Modal";
import type { ILayoutProps } from "../interface";

const Mainlayout = ({ children }: ILayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Modal /> {/* Add Modal here so it overlays on all pages */}
    </div>
  );
};

export default Mainlayout;
