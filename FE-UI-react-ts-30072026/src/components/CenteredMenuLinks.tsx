import { Menu, X } from "lucide-react";
import { useState } from "react";

type MenuItem = {
  id: number;
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { id: 1, label: "Home", href: "#home" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "Projects", href: "#projects" },
  { id: 5, label: "Contact", href: "#contact" },
];

export function CenteredMenuLinks() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (label: string) => {
    setActiveLink(label);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 font-brand backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="container mx-auto grid min-h-20 grid-cols-[1fr_auto] items-center px-5 lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#home"
          className="flex items-center gap-3 justify-self-start"
          aria-label="Brand home"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-brand-18 text-white dark:bg-primary dark:text-slate-950">
            B
          </span>

          <span className="text-brand-20 text-secondary dark:text-primary">
            BrandUI
          </span>
        </a>

        <div className="hidden items-center justify-center gap-2 lg:flex">
          {menuItems.map((item) => {
            const isActive = activeLink === item.label;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleLinkClick(item.label)}
                className={[
                  "group relative rounded-xl px-5 py-3 text-brand-14 transition-colors duration-300",
                  isActive
                    ? "text-secondary dark:text-primary"
                    : "text-slate-500 hover:text-secondary dark:text-slate-300 dark:hover:text-primary",
                ].join(" ")}
              >
                {item.label}

                <span
                  className={[
                    "absolute inset-x-5 bottom-1 h-0.5 origin-center rounded-full bg-primary transition-transform duration-300",
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  ].join(" ")}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden justify-self-end lg:block">
          <button
            type="button"
            className="rounded-xl bg-secondary px-5 py-3 text-brand-14 text-white transition hover:-translate-y-0.5 hover:bg-secondary/90 dark:bg-primary dark:text-slate-950"
          >
            Get started
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex size-11 items-center justify-center justify-self-end rounded-xl border border-slate-200 text-secondary transition hover:border-primary hover:bg-primary/10 dark:border-slate-700 dark:text-primary lg:hidden"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        className={[
          "overflow-hidden border-t border-slate-200 transition-all duration-300 dark:border-slate-800 lg:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="container mx-auto flex flex-col items-center gap-2 px-5 py-5">
          {menuItems.map((item) => {
            const isActive = activeLink === item.label;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleLinkClick(item.label)}
                className={[
                  "w-full max-w-sm rounded-xl px-5 py-3 text-center text-brand-14 transition",
                  isActive
                    ? "bg-primary/15 text-secondary dark:text-primary"
                    : "text-slate-500 hover:bg-slate-100 hover:text-secondary dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-primary",
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}

          <button
            type="button"
            className="mt-2 w-full max-w-sm rounded-xl bg-secondary px-5 py-3 text-brand-14 text-white dark:bg-primary dark:text-slate-950"
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
