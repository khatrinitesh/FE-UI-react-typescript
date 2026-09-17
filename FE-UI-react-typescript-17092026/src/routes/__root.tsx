import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <div className="appLayout flex flex-col h-dvh">
        <Header />

        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
      </div>
      <Toaster richColors />
    </>
  );
}
