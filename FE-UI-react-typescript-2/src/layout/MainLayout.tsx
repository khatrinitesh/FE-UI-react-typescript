import FooterSection from "../components/footerSection/FooterSection";
import HeaderSection from "../components/headerSection/HeaderSection";
import type { MainLayoutProps } from "../interface";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="appLayout w-full">
      <HeaderSection />
      <div className="mainContent">{children}</div>
      <FooterSection />
    </div>
  );
};

export default MainLayout;
