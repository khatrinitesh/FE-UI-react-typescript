import type { ReactNode } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="appLayout flex min-h-screen flex-col">
      <Header />

      <div className="mainContent flex-1">{children}</div>

      <Footer />
    </div>
  );
}
