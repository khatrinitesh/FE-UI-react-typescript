import {
  Link,
  useRouterState,
} from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { useAppStore } from "../../store/app.store";
import { assets } from "../../utils/assets";
import { Button } from "../common/Button";

export function Header() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isHomePage = pathname === "/";

  const isSidebarOpen = useAppStore(
    (state) => state.isSidebarOpen,
  );

  const toggleSidebar = useAppStore(
    (state) => state.toggleSidebar,
  );

  const setSidebarOpen = useAppStore(
    (state) => state.setSidebarOpen,
  );

  return (
    <header className="relative border-b border-slate-200 bg-secondary">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          to="/"
          onClick={() => setSidebarOpen(false)}
        >
          <img
            src={
              isHomePage
                ? assets.img.logo1
                : assets.img.logo2
            }
            alt="Website logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 min-[767px]:flex">
          <Link
            to="/"
            activeProps={{
              className: "text-blue-600",
            }}
            className="text-sm font-medium text-white hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to={"/about" as any}
            activeProps={{
              className: "text-blue-600",
            }}
            className="text-sm font-medium text-white hover:text-blue-600"
          >
            About
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="sm"
          className="cursor-pointer min-[767px]:hidden"
          aria-label={
            isSidebarOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isSidebarOpen}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </Button>
      </div>

      {/* Mobile navigation */}
      {isSidebarOpen && (
        <nav className="absolute top-16 left-0 z-50 flex w-full flex-col border-t border-slate-200 bg-white px-4 py-4 shadow-lg min-[767px]:hidden">
          <Link
            to="/"
            className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </Link>

          <Link
            to={"/about" as any}
            className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            onClick={() => setSidebarOpen(false)}
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
}