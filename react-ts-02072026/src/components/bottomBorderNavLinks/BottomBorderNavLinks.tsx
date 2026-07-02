import { Link, useLocation } from "@tanstack/react-router"
import { motion } from "framer-motion"

const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
]

export default function BottomBorderNavLinks() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-gray-900">
          Logo
        </Link>

        <nav className="flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative pb-1 text-sm font-medium text-gray-700 transition-colors hover:text-black"
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="bottom-border"
                    className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-black"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}