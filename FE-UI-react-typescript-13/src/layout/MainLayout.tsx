import type { ILayoutProps } from "../interface";
import FooterSection from "./footerSection/FooterSection";
import HeaderSection from "./headerSection/HeaderSection";

const MainLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <div className="appLayout grid grid-rows-[auto_1fr_auto] h-dvh">
        <HeaderSection />
        <div className="mainLayout">{children}</div>
        <FooterSection />
      </div>
    </>
  );
};

export default MainLayout;
