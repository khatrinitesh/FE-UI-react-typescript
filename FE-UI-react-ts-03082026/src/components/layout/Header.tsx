import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Assets from "../../utils/assets";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/product" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const [isOpen, setIsOpen] = useState(false);

  // Home page => logo1
  // All other pages => logo2
  const logo = pathname === "/" ? Assets.Images.logo1 : Assets.Images.logo2;

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`transition hover:text-indigo-600 ${
                pathname === item.to
                  ? "font-semibold text-indigo-600"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`px-6 py-4 ${
                  pathname === item.to
                    ? "bg-indigo-50 font-semibold text-indigo-600"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
