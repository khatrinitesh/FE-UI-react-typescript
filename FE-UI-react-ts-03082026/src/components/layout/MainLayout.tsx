import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="appLayout flex min-h-screen flex-col">
      <Header />
      <div className="mainContent flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
