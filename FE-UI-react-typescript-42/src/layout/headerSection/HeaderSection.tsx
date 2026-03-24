import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import { NAV_ITEMS } from "../../constants/constants";
import { useUIStore } from "../../store/useUIStore";
import { ASSETS } from "../../utils/assets";

const HeaderSection = () => {
  const { isMenuOpen, toggleMenu } = useUIStore();
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logoBlock">
          <Link to="/">
            <img className="w-20" src={ASSETS.img("logo1.png")} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive ? "text-yellow-400" : "hover:text-yellow-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Button */}
        <button onClick={toggleMenu} className="md:hidden cursor-pointer">
          ☰
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? "auto" : 0 }}
        className="overflow-hidden bg-gray-900 md:hidden"
      >
        <div className="flex flex-col p-4 gap-4">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.name} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default HeaderSection;
