import Header from "./Header";
import Footer from "./Footer";
import type { ILayout } from "../interface";

const MainLayout = ({ children }: ILayout) => {
  return (
    <>
      <div className="appLayout h-dvh grid grid-rows-[auto_1fr_auto]">
        <Header />
        <div className="mainContent">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
