import { useState } from "react";
import { NavLink, useLocation } from "react-router"
import { navLinks } from "../../constants/constants";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { images } from "../../utils/assets";


const HeaderSection = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-black py-4">
            <div className="container mx-auto flex justify-between items-center px-4">

                {/* Logo */}
                <div className="text-white font-bold text-lg">
                    <img src={isHome ? images.logo1 : images.logo2}
                        alt="logo"
                        className="h-8 object-contain" />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6">
                    {navLinks.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-white transition-all duration-300 ${isActive
                                    ? "border-b-2 border-yellow-400 pb-1"
                                    : "hover:text-yellow-300"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-black px-4"
                    >
                        <div className="flex flex-col gap-4 py-4">
                            {navLinks.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-white transition-all duration-300 ${isActive
                                            ? "text-yellow-400"
                                            : "hover:text-yellow-300"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default HeaderSection
