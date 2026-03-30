import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useLocation } from "react-router";


const HeaderSection = () => {
     const [open, setOpen] = useState(false);
     const location = useLocation();
     const isHome = location.pathname === "/";
      const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-gray-300";
  return (
   <header className="bg-black py-4">
      <div className="container mx-auto">
        <div className="innerHeader flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-white">
          {isHome ? 'Logo1' : 'Logo2'}
        </h1>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink className={navClass} to="/">
            Home
          </NavLink>
          <NavLink className={navClass} to="/about">
            About
          </NavLink>
          <NavLink className={navClass} to="/products">
            Products
          </NavLink>
          <NavLink className={navClass} to="/contact">
            Contact
          </NavLink>
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
 
      {/* Mobile Menu hamnburger < 767 width */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black px-4 pb-4"
          >
            <nav className="flex flex-col gap-4 mt-4">
              <NavLink
                className="text-white"
                to="/"
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                className="text-white"
                to="/about"
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                className="text-white"
                to="/products"
                onClick={() => setOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                className="text-white"
                to="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </header>
  )
}

export default HeaderSection
