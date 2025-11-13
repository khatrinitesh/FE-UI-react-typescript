import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";
import type { ILayoutProps } from "../interface";

const MainLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <div className="applayout grid grid-rows-[auto_1fr_auto] h-dvh ">
        <HeaderSection />
        <div className="mainContent ">{children}</div>
        <FooterSection />
      </div>
    </>
  );
};

export default MainLayout;
