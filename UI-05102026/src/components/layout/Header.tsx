import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import {
  Link,
  NavLink,
  useLocation,
} from "react-router"
import { images } from "../../utils/assets"


const navigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
   {
    label: "College",
    path: "/college",
  },
  {
    label: "Contact",
    path: "/contact",
  },
]

export default function Header() {
  const { pathname } = useLocation()

  const [mobileOpen, setMobileOpen] = useState(false)

  // logo1 ONLY on exact homepage "/"
  // logo2 on every other page
  const isHomePage = pathname === "/"

  const logo = isHomePage
    ? images.logo1
    : images.logo2

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Go to homepage"
          className="shrink-0"
        >
          <img
            src={logo}
            alt="College logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 min-[991px]:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                [
                  "text-sm font-medium transition-colors duration-200",
                  isActive
                    ? "text-zinc-950"
                    : "text-zinc-500 hover:text-zinc-950",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen((prev) => !prev)
          }
          className="flex size-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-950 transition-colors hover:bg-zinc-50 min-[991px]:hidden"
        >
          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white min-[991px]:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 p-5">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "bg-zinc-100 text-zinc-950"
                      : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}