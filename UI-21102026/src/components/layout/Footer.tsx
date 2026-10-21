import { Link } from "@tanstack/react-router";
import { ROUTES } from "../../constants/routes";

const footerRoutes = [
  { label: "Home", to: ROUTES.HOME },
  { label: "Products", to: ROUTES.PRODUCTS },
  { label: "Login", to: ROUTES.AUTH.LOGIN },
  { label: "Register", to: ROUTES.AUTH.REGISTER },
  { label: "Verify OTP", to: ROUTES.AUTH.OTP },
];

export const Footer = () => {
  return (
    <footer className="bg-black px-6 py-12 text-white lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Top */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div className="lg:col-span-2">

            <Link
              to={ROUTES.HOME}
              className="text-3xl font-bold tracking-tight"
            >
              BRAND
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              A modern React TypeScript application
              built with Vite, TanStack, Framer Motion
              and Tailwind CSS.
            </p>

          </div>


          {/* Navigation */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col gap-3">

             {footerRoutes.map((item) => (
                    <Link
                    key={item.to}
                    to={item.to}
                    className="w-fit text-sm text-white/60 transition hover:text-white"
                    >
                    {item.label}
                    </Link>
                ))}

            </nav>

          </div>


          {/* Contact */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">

              <a
                href="mailto:hello@example.com"
                className="transition hover:text-white"
              >
                hello@example.com
              </a>

              <a
                href="tel:+910000000000"
                className="transition hover:text-white"
              >
                +91 00000 00000
              </a>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/30 sm:flex-row">

          <p>
            © {new Date().getFullYear()} BRAND.
            All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};