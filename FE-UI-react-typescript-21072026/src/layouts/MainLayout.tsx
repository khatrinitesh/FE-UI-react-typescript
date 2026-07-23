import { Outlet } from "@tanstack/react-router";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";



export function MainLayout() {
  return (
    <div className="appLayout min-h-screen flex flex-col bg-primary">
      <Header />

      <div className="flex-1 h-dvh">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}