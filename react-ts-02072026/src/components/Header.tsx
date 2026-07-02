
import { Link, useLocation } from "@tanstack/react-router"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NAV_LINKS, PATHS } from "../constants/path"
import { IMAGES } from "../utils/assets"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === PATHS.home
  const logoSrc = isHomePage ? IMAGES.logo1 : IMAGES.logo2

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to={PATHS.home} onClick={closeMenu} className="text-xl font-bold">
          <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="font-medium text-gray-700 hover:text-blue-600"
              activeProps={{
                className: "text-blue-600 font-bold",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 md:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          aria-label="Close menu overlay"
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-72 bg-white p-6 shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link
            to={PATHS.home}
            onClick={closeMenu}
            className="text-xl font-bold"
          >
            <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              activeProps={{
                className: "bg-blue-50 text-blue-600 font-bold",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  )
}