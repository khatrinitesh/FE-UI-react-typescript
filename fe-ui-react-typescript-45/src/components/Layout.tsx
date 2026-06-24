import { Outlet } from "@tanstack/react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Outlet />
    </div>
  );
}
