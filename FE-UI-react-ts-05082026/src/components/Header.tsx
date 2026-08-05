import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { assets } from "../utils/assets";
import { cn } from "../utils/cn";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const onHome = pathname === "/";
  return (
    <header className="border-b border-white/10 bg-zinc-950/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Studio home">
          <img
            src={onHome ? assets.images.logoHome : assets.images.logoInner}
            alt="Studio"
            className="h-8 w-36"
          />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-zinc-400 transition hover:text-amber-300"
              activeProps={{ className: "text-amber-300" }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg p-2 text-zinc-100 md:hidden"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        className={cn(
          "overflow-hidden border-t border-white/10 px-5 transition-all md:hidden",
          open ? "max-h-48 py-3" : "max-h-0 py-0",
        )}
      >
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className="block py-2 text-sm text-zinc-300"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
