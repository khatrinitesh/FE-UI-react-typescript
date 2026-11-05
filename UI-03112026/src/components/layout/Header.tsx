import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
] as const;

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <Link
            to="/"
            className="text-xl font-bold text-brand-600"
          >
            StarterKit
          </Link>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap gap-5 text-sm font-medium"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{
                  className: "text-brand-600",
                }}
                className="hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
  )
}
