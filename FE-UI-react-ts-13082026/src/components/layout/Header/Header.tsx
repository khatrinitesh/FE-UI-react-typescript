import { Link, useRouterState } from "@tanstack/react-router";
import assets from "../../../utils/assets";

export default function Header() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isHome = pathname === "/";

  return (
    <header className="flex items-center justify-between px-5 py-4">
      <Link to="/">
        <img
          src={isHome ? assets.images.logo1 : assets.images.logo2}
          alt="Logo"
          className="h-10 w-auto"
        />
      </Link>

      <nav className="hidden items-center gap-6 min-[768px]:flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Mobile hamburger: < 768px */}
      <button
        type="button"
        aria-label="Open menu"
        className="flex min-[768px]:hidden"
      >
        ☰
      </button>
    </header>
  );
}
