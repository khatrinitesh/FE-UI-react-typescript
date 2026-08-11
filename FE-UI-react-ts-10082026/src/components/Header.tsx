import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Assets from "../utils/assets";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const logo = pathname === "/" ? Assets.Images.logo1 : Assets.Images.logo2;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 min-[768px]:flex">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>

          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>

          <Link to="/products" className="[&.active]:font-bold">
            Products
          </Link>

          <Link to="/contact" className="[&.active]:font-bold">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="min-[768px]:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-gray-200 px-5 py-5 min-[768px]:hidden">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/products" onClick={() => setOpen(false)}>
            Products
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
