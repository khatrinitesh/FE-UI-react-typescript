import { NavLink, useLocation } from "react-router";
import { TOP_NAVIGATION } from "../../constants/constants";
import { AnimatePresence, motion } from "framer-motion";
import LogoBlock from "../Logo/LogoBlock";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = "text-yellow-400 font-bold border-b-2 border-yellow-400";
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow-md flex items-center justify-between relative">
      {/* Logo */}
      <LogoBlock variant={isHome ? "home" : "default"} />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {TOP_NAVIGATION.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `px-2 py-1 ${isActive ? activeClass : "text-white hover:text-gray-200"}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button className="relative z-99" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)} // close when clicking outside
            />

            {/* Sliding Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-blue-600 shadow-lg z-50 flex flex-col p-6 gap-4"
            >
              {TOP_NAVIGATION.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)} // close on click
                  className={({ isActive }) =>
                    `px-2 py-2 rounded ${
                      isActive ? activeClass : "text-white hover:text-gray-200"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
