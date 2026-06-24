import { Link, useLocation } from "@tanstack/react-router";
import { NAV_ITEMS, PATHS, SITE_CONFIG } from "../constants/constants";
import { useAppStore } from "../store/useAppStore";
import { ASSETS } from "../utils/assets";

export default function Navbar() {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useAppStore();

  const isHomePage = location.pathname === PATHS.HOME;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          {isHomePage ? (
            <img
              src={ASSETS.images.logo1}
              alt={`${SITE_CONFIG.appName} Logo 1`}
              className="h-10 w-auto object-contain"
            />
          ) : (
            <img
              src={ASSETS.images.logo2}
              alt={`${SITE_CONFIG.appName} Logo 2`}
              className="h-10 w-auto object-contain"
            />
          )}
        </Link>

        <div className="flex items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-cyan-400 text-black"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <button
            onClick={toggleTheme}
            className="ml-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
