import { Link, useLocation } from "@tanstack/react-router"
import { PATHS } from "../../routes/paths"
import { IMAGES } from "../../utils/assets"

export default function Header() {
    const location = useLocation()

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to={PATHS.HOME} className="text-xl font-bold text-blue-600">
            {location.pathname === PATHS.HOME ? <img src={IMAGES.logo1} className="size-15 rounded-full" alt="Logo" /> : <img src={IMAGES.logo2} className="size-15 rounded-full" alt="Logo" />}      
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to={PATHS.HOME}
            className="font-medium text-gray-700 hover:text-blue-600"
            activeProps={{
              className: "font-semibold text-blue-600",
            }}
          >
            Home
          </Link>

          <Link
            to={PATHS.ABOUT}
            className="font-medium text-gray-700 hover:text-blue-600"
            activeProps={{
              className: "font-semibold text-blue-600",
            }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
