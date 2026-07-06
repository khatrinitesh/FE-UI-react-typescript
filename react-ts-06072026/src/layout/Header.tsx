import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  House,
  CircleUserRound,
  Mail,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  title: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: House,
  },
  {
    title: "About",
    path: "/about",
    icon: CircleUserRound,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: Mail,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            MyApp
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ title, path, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  pathname === path
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                <Icon size={18} />
                {title}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-[1000] h-full w-72 bg-white shadow-xl transition-transform duration-300 md:hidden ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">

          <h2 className="text-xl font-bold text-indigo-600">
            Menu
          </h2>

          <button onClick={closeMenu}>
            <X size={26} />
          </button>

        </div>

        <nav className="flex flex-col p-4">

          {navItems.map(({ title, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                pathname === path
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              {title}
            </Link>
          ))}

        </nav>
      </aside>
    </>
  );
}