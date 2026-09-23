import { useState } from "react";
import { NavLink, useLocation } from "react-router";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
  { label: "Comments", path: "/comments" },
];

const logo1 = "https://placehold.co/160x48/000000/FFFFFF?text=Logo+1";
const logo2 = "https://placehold.co/160x48/FFFFFF/000000?text=Logo+2";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = location.pathname === "/";
  const currentLogo = isHomePage ? logo1 : logo2;

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={currentLogo} alt="Logo" className="h-10 w-auto" />
          </NavLink>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 min-[991px]:flex">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end={item.path === "/"} className={({ isActive }) => (isActive ? "font-semibold text-blue-600" : "text-gray-700 transition-colors hover:text-blue-600")}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger - only below 991px */}
          <button type="button" aria-label="Toggle navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((prev) => !prev)} className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 min-[991px]:hidden">
            <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />

            <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />

            <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Black transparent overlay */}
      {isMenuOpen && <button type="button" aria-label="Close navigation" onClick={() => setIsMenuOpen(false)} className="fixed inset-0 z-40 bg-black/60 min-[991px]:hidden" />}

      {/* Mobile menu */}
      <div className={`fixed top-20 right-0 z-50 h-[calc(100vh-5rem)] w-[80%] max-w-sm bg-white transition-transform duration-300 min-[991px]:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} end={item.path === "/"} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `border-b border-gray-200 px-6 py-5 transition-colors ${isActive ? "bg-gray-100 font-semibold text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
