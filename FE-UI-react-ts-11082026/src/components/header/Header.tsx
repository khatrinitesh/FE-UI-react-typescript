import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Assets } from "../../utils/assets";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const logo = isHomePage ? Assets.Images.logo1 : Assets.Images.logo2;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 min-[768px]:flex">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            About
          </Link>

          <Link
            to="/products"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md min-[768px]:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-full bg-black transition-transform ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-full bg-black transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block h-0.5 w-full bg-black transition-transform ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="border-t border-gray-200 bg-white min-[768px]:hidden">
          <div className="flex flex-col px-4 py-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="border-b border-gray-100 py-3 text-sm font-medium"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="border-b border-gray-100 py-3 text-sm font-medium"
            >
              About
            </Link>

            <Link
              to="/products"
              onClick={closeMenu}
              className="border-b border-gray-100 py-3 text-sm font-medium"
            >
              Products
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="py-3 text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
