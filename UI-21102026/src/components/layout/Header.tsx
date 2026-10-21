import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ROUTES } from "../../constants/routes";

export const NAVIGATION = [
  { label: "Home", to: ROUTES.HOME },
  { label: "Products", to: ROUTES.PRODUCTS },
  { label: "Login", to: ROUTES.AUTH.LOGIN },
  { label: "Register", to: ROUTES.AUTH.REGISTER },
] as const;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}

          <Link
            to="/"
            className="relative z-[60] text-2xl font-bold tracking-tight"
          >
            BRAND
          </Link>


          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-2 min-[991px]:flex">

           {NAVIGATION.map((item) => {
            const isActive = item.to === pathname;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-black text-white"
                    : "text-black/60 hover:bg-black/5 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          </nav>


          {/* Desktop CTA */}

          <div className="hidden items-center gap-3 min-[991px]:flex">

            <Link
              to="/login"
              className="rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-black/5"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:scale-105"
            >
              Get Started
            </Link>

          </div>


          {/* Mobile Hamburger */}

          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((previous) => !previous)
            }
            className="relative z-60 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 min-[991px]:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">

              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        rotate: 45,
                        y: 4,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                className="block h-0.5 w-full bg-black"
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 1,
                      }
                }
                className="block h-0.5 w-full bg-black"
              />

              <motion.span
                animate={
                  isMenuOpen
                    ? {
                        rotate: -45,
                        y: -4,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                className="block h-0.5 w-full bg-black"
              />

            </div>
          </button>

        </div>
      </header>


      {/* Mobile Overlay */}

      <AnimatePresence>

        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 z-40 bg-black/40 min-[991px]:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

      </AnimatePresence>


      {/* Mobile Navigation */}

      <AnimatePresence>

        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="fixed left-0 top-0 z-50 w-full bg-white px-6 pb-8 pt-28 shadow-xl min-[991px]:hidden"
          >

            <nav className="flex flex-col">

            {NAVIGATION.map((item, index) => {
            const isActive = item.to === pathname;

            return (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block border-b border-black/10 py-5 text-2xl font-semibold transition-colors ${
                    isActive ? "text-black" : "text-black/50"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}

            </nav>


            {/* Mobile CTA */}

            <Link
              to="/register"
              className="mt-8 block rounded-full bg-black px-6 py-4 text-center font-medium text-white"
            >
              Get Started
            </Link>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
};