import { NavLink, useLocation } from "react-router-dom";
import { NAVDATA } from "./navData";
import { FiMenu, FiX } from "react-icons/fi"; // for hamburger icons
import { useState } from "react";

const HeaderSection = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="header bg-[#205f15] py-[10px] relative">
      <div className="container">
        <div className="innerHeader flex items-center justify-between">
          {/* Logo */}
          <div className="logoBlock">
            <h2 className="text-white font-bold text-[20px]">
              {isHome ? "Logo1" : "Logo2"}
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-[10px] text-center">
            {NAVDATA.map(({ title, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-white px-3 py-1 rounded-[5px] transition-all nav-link ${
                    isActive ? "active bg-red-400" : ""
                  }`
                }
              >
                <Icon className="nav-ico mx-auto" />
                {title}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger Button (mobile) */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-[#205f15] flex flex-col items-center md:hidden z-50 py-4 shadow-md animate-fadeIn">
            {NAVDATA.map(({ title, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className={({ isActive }: { isActive: boolean }) =>
                  `block w-full text-white py-2 text-center transition-all ${
                    isActive ? "bg-red-400" : "hover:bg-[#267d1e]"
                  }`
                }
              >
                <div className="flex justify-center items-center gap-2">
                  <Icon className="nav-ico" />
                  {title}
                </div>
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderSection;
