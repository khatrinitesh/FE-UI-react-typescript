import Header from "./shared/Header";
import Footer from "./shared/Footer";
import type { LayoutProps } from "./../interface/index";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="appLayout  grid-rows-[auto_1fr_auto] grid min-h-dvh">
        <Header />
        <div className="mainContent ">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
