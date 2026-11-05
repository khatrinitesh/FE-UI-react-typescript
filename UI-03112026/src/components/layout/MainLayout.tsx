import {
    Outlet,
} from "@tanstack/react-router";
import { ScrollToTop } from "../ui/ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

export function MainLayout() {
  return (
    <div className="appLayout flex min-h-screen flex-col">
        <Header/>
            <div className="mainContent mx-auto w-full max-w-6xl flex-1 px-5 py-10">
                <Outlet />
            </div>
        <Footer/>
      <ScrollToTop />
    </div>
  );
}