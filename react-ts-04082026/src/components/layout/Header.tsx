import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Assets } from "../../utils/assets";

const navigation = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Posts",
    to: "/posts",
  },
  {
    label: "Contact",
    to: "/contact",
  },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  // Logo 1 only on the home page.
  // Logo 2 on every other page.
  const currentLogo =
    pathname === "/" ? Assets.logos.logo1 : Assets.logos.logo2;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <section className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Go to home page"
          onClick={closeMenu}
          className="inline-flex items-center"
        >
          <img
            src={currentLogo}
            alt="Website logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation: visible from 767px */}
        <nav
          aria-label="Desktop navigation"
          className="hidden items-center gap-2 min-[767px]:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{
                exact: item.to === "/",
              }}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
              activeProps={{
                className: "bg-blue-50 text-blue-700",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger: visible only below 767px */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex size-11 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 min-[767px]:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </section>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t border-slate-100 bg-white min-[767px]:hidden"
          >
            <section className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  activeOptions={{
                    exact: item.to === "/",
                  }}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
                  activeProps={{
                    className: "bg-blue-50 text-blue-700",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </section>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
