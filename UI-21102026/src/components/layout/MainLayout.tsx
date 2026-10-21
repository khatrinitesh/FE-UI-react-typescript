import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className="appLayout min-h-screen">

      <Header />

      <div className="mainContent pt-20">
        {children}
      </div>

      <Footer />

    </div>
  );
};