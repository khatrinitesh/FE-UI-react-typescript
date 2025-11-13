import FooterSection from "../components/footerSection/FooterSection";
import HeaderSection from "../components/headerSection/HeaderSection";

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
