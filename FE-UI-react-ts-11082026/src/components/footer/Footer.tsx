import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          {/* Footer Navigation */}
          <nav className="flex flex-wrap gap-5">
            <Link
              to="/"
              className="text-sm text-gray-500 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-sm text-gray-500 transition hover:text-black"
            >
              About
            </Link>

            <Link
              to="/products"
              className="text-sm text-gray-500 transition hover:text-black"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="text-sm text-gray-500 transition hover:text-black"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
