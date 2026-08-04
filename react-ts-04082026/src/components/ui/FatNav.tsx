import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavigationItem {
  label: string;
  href: string;
  number: string;
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/", number: "01" },
  { label: "About", href: "/about", number: "02" },
  { label: "Services", href: "/services", number: "03" },
  { label: "Projects", href: "/projects", number: "04" },
  { label: "Contact", href: "/contact", number: "05" },
];

export default function FatNav() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.body.style.overflow = isOpen ? "hidden" : "";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
        aria-expanded={isOpen}
        aria-controls="fat-navigation"
        className="inline-flex size-12 items-center justify-center rounded-full bg-[#009eff] text-white transition-all duration-300 hover:scale-105 hover:bg-[#007dcc]"
      >
        <Menu size={24} />
      </button>

      <nav
        id="fat-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 flex min-h-dvh flex-col overflow-y-auto bg-[#101820] text-white transition-all duration-500 ease-in-out ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0"
        }`}
      >
        <header className="flex items-center justify-between border-b border-white/15 px-6 py-5 md:px-12">
          <a
            href="/"
            onClick={closeMenu}
            className="text-2xl font-semibold tracking-wider"
          >
            <span className="text-[#009eff]">N</span>ITESH
          </a>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation"
            className="inline-flex size-12 items-center justify-center rounded-full border border-white/30 transition-all duration-300 hover:rotate-90 hover:border-[#009eff] hover:bg-[#009eff]"
          >
            <X size={24} />
          </button>
        </header>

        <div className="flex flex-1 items-center px-6 py-10 md:px-12">
          <ul className="w-full">
            {navigationItems.map((item) => (
              <li key={item.href} className="border-b border-white/15">
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex items-center gap-5 py-4 transition-all duration-300 md:py-5"
                >
                  <span className="text-sm text-white/40 transition-colors group-hover:text-[#009eff]">
                    {item.number}
                  </span>

                  <span className="text-[clamp(2rem,7vw,5.5rem)] leading-none transition-all duration-300 group-hover:translate-x-4 group-hover:text-[#009eff]">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="flex flex-wrap justify-between gap-4 border-t border-white/15 px-6 py-5 text-sm text-white/50 md:px-12">
          <p>© 2026 Welcome</p>

          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-[#009eff]">
              Instagram
            </a>

            <a href="#" className="transition-colors hover:text-[#009eff]">
              LinkedIn
            </a>
          </div>
        </footer>
      </nav>
    </>
  );
}
