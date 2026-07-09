import { Link } from "@tanstack/react-router"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            {import.meta.env.VITE_APP_NAME || "Modern Website"}
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            A modern React TypeScript website using TanStack Router, Query,
            Form, TailwindCSS, Axios, Zustand, Sonner, and Lucide React.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 md:justify-end">
          <Link
            to="/"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Home
          </Link>

          <Link
            to="/product"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Product
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200 px-5 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()}{" "}
        {import.meta.env.VITE_APP_NAME || "Modern Website"}. All rights
        reserved.
      </div>
    </footer>
  )
}