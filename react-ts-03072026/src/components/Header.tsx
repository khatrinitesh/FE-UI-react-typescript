import { Link, useLocation } from "@tanstack/react-router"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { IMAGES } from "../constants/assets"
import { navLinks } from "../constants/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === "/"

  const logo = isHomePage ? IMAGES.logo1 : IMAGES.logo2

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => {
              const active = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold transition ${
                    active
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-white p-5 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <img src={logo} alt="Logo" className="h-8 w-auto" />

                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200"
                >
                  <X className="size-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {navLinks.map((item) => {
                  const active = location.pathname === item.path

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? "bg-blue-600 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}