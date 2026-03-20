import Hamburger from "hamburger-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { navItems } from "../../constants/constants";

const HeaderSection = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();

  // check if homepage
  const isHome = location.pathname === "/";
  return (
    <header className="header py-4 bg-black relative">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="font-bold text-lg text-white">
          {isHome ? "Logo1" : "Logo2"}
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white transition ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} size={22} color="#fff" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)} // close on click
              className={({ isActive }) =>
                `text-white text-lg ${
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
