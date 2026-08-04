import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 min-[767px]:flex-row min-[767px]:items-center min-[767px]:justify-between lg:px-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} React UI Starter. All rights reserved.
        </p>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-5"
        >
          <Link
            to="/"
            className="text-sm text-slate-500 transition-colors hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm text-slate-500 transition-colors hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-sm text-slate-500 transition-colors hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
      </section>
    </footer>
  );
}
