import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "../constants/navigation";
import { useUIStore } from "../store/uiStore";
import { ASSETS } from "../utils/assets";
export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { mobileOpen, toggleMobile, closeMobile } = useUIStore();
  const logo = pathname === "/" ? ASSETS.images.logo1 : ASSETS.images.logo2;
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between">
        <Link to="/" onClick={closeMobile}>
          <img
            src={logo}
            alt="Logo"
            className="h-9 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="font-bold text-indigo-700">ModernUI</span>
        </Link>
        <nav className="hidden gap-2 md:flex">
          {NAVIGATION.map(({ label, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              activeOptions={{ exact: to === "/" }}
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-slate-600"
              activeProps={{
                className: "bg-indigo-50 text-indigo-700 font-semibold",
              }}
            >
              <Icon size={17} />
              {label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden cursor-pointer"
          onClick={toggleMobile}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileOpen && (
        <nav className="container-page grid gap-2 pb-4 md:hidden">
          {NAVIGATION.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMobile}
              className="rounded-lg px-4 py-3"
              activeProps={{
                className: "bg-indigo-50 text-indigo-700 font-semibold",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
