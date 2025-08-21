import type { MainLayoutProps } from "../interface";
import FooterSection from "./footerSection/FooterSection";
import HeaderSection from "./headerSection/HeaderSection";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="appLayout">
      <HeaderSection />
      <div className="mainContent">{children}</div>
      <FooterSection />
    </div>
  );
};

export default MainLayout;
