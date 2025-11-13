import type { lLayoutProps } from "../interface";
import FooterSection from "./footerSection/FooterSection";
import HeaderSection from "./headerSection/HeaderSection";

const Mainlayout = ({ children, className }: lLayoutProps) => {
  return (
    <>
      <div className="appLayout h-dvh grid grid-rows-[auto_1fr_auto]">
        <HeaderSection />
        <div className={`${className} mainContent`}>{children}</div>
        <FooterSection />
      </div>
    </>
  );
};

export default Mainlayout;
