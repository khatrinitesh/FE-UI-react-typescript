import { Link, linkOptions } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = linkOptions([
  {
    to: "/",
    label: "Home",
    activeOptions: { exact: true },
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/academics",
    label: "Academics",
  },
  {
    to: "/admissions",
    label: "Admissions",
  },
  {
    to: "/facilities",
    label: "Facilities",
  },
  {
    to: "/gallery",
    label: "Gallery",
  },
  {
    to: "/contact",
    label: "Contact",
  },
]);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-bold text-primary">
          School Name
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          {navLinks.map(({ label, ...link }) => (
            <Link
              key={link.to}
              {...link}
              className="rounded-md px-3 py-2 transition-colors"
              activeProps={{ className: "bg-primary text-white" }}
              inactiveProps={{ className: "hover:bg-black/5" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="rounded-md p-2 text-black md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6l-12 12" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/10 px-6 py-4 text-sm font-medium md:hidden">
          {navLinks.map(({ label, ...link }) => (
            <Link
              key={link.to}
              {...link}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-2 transition-colors"
              activeProps={{ className: "bg-primary text-white" }}
              inactiveProps={{ className: "hover:bg-black/5" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}