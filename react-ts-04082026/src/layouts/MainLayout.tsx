import type { ReactNode } from "react";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="appLayout flex min-h-screen flex-col bg-slate-50">
      <Header />
      <div className="mainContent flex-1">{children}</div>
      <Footer />
    </div>
  );
}
