import Footer from "./Footer";
import Header from "./Header";
import type { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1 container mt-10 px-4 md:px-6">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
