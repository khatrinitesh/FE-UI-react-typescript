import { useEffect, useRef, useState } from "react";

type MenuItem = {
  id: string;
  label: string;
  title: string;
  description: string;
};

const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    title: "Welcome to BrandUI",
    description:
      "Create responsive and modern interfaces using React, TypeScript and Tailwind CSS.",
  },
  {
    id: "about",
    label: "About",
    title: "About our platform",
    description:
      "We build reusable design systems and scalable digital experiences.",
  },
  {
    id: "services",
    label: "Services",
    title: "Our services",
    description:
      "Explore product design, React development and application architecture.",
  },
  {
    id: "projects",
    label: "Projects",
    title: "Featured projects",
    description:
      "Discover selected interfaces, applications and digital products.",
  },
  {
    id: "contact",
    label: "Contact",
    title: "Start a conversation",
    description:
      "Get in touch to discuss your next digital product or interface.",
  },
];

export function ScrollActiveMenu() {
  const [activeSection, setActiveSection] = useState(menuItems[0].id);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        const mostVisibleEntry = visibleEntries[0];

        if (mostVisibleEntry) {
          setActiveSection(mostVisibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);

    sectionRefs.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 font-brand text-slate-900 dark:bg-slate-950 dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
        <nav className="container mx-auto flex min-h-20 items-center justify-between px-5">
          <button
            type="button"
            onClick={() => handleMenuClick("home")}
            className="flex items-center gap-3"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-brand-18 text-white dark:bg-primary dark:text-slate-950">
              B
            </span>

            <span className="text-brand-20 text-secondary dark:text-primary">
              BrandUI
            </span>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleMenuClick(item.id)}
                  className={[
                    "group relative rounded-xl px-4 py-3 text-brand-14 transition-colors duration-300",
                    isActive
                      ? "text-secondary dark:text-primary"
                      : "text-slate-500 hover:text-secondary dark:text-slate-300 dark:hover:text-primary",
                  ].join(" ")}
                >
                  {item.label}

                  <span
                    className={[
                      "absolute inset-x-4 bottom-1 h-0.5 origin-center rounded-full bg-primary transition-transform duration-300",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </button>
              );
            })}
          </div>

          <span className="rounded-full bg-primary/15 px-4 py-2 text-brand-12 text-secondary dark:text-primary">
            {menuItems.find((item) => item.id === activeSection)?.label}
          </span>
        </nav>

        <div className="h-1 bg-slate-100 dark:bg-slate-900">
          <div
            className="h-full bg-primary transition-[width] duration-300"
            style={{
              width: `${
                ((menuItems.findIndex((item) => item.id === activeSection) +
                  1) /
                  menuItems.length) *
                100
              }%`,
            }}
          />
        </div>
      </header>

      {menuItems.map((item, index) => {
        const isActive = activeSection === item.id;

        return (
          <section
            key={item.id}
            id={item.id}
            ref={(element) => {
              sectionRefs.current[item.id] = element;
            }}
            className={[
              "flex min-h-screen scroll-mt-20 items-center px-5 py-28 transition-colors duration-500",
              index % 2 === 0
                ? "bg-white dark:bg-slate-950"
                : "bg-slate-100 dark:bg-slate-900",
            ].join(" ")}
          >
            <div className="container mx-auto">
              <div className="mx-auto max-w-5xl">
                <div
                  className={[
                    "rounded-[2rem] border p-8 transition-all duration-500 sm:p-12",
                    isActive
                      ? "border-primary bg-primary/10 shadow-2xl shadow-secondary/10"
                      : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={[
                        "flex size-14 items-center justify-center rounded-2xl text-brand-18 transition-colors",
                        isActive
                          ? "bg-secondary text-white dark:bg-primary dark:text-slate-950"
                          : "bg-slate-100 text-slate-500 dark:bg-slate-800",
                      ].join(" ")}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-brand-14 uppercase tracking-[0.2em] text-secondary dark:text-primary">
                      {item.label}
                    </span>
                  </div>

                  <h2 className="mt-8 max-w-3xl text-brand-48 leading-tight text-secondary dark:text-primary">
                    {item.title}
                  </h2>

                  <p className="mt-5 max-w-2xl text-brand-18 leading-8 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  {index < menuItems.length - 1 && (
                    <button
                      type="button"
                      onClick={() => handleMenuClick(menuItems[index + 1].id)}
                      className="mt-8 rounded-xl bg-secondary px-6 py-3 text-brand-14 text-white transition hover:-translate-y-0.5 hover:bg-secondary/90 dark:bg-primary dark:text-slate-950"
                    >
                      Next section
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
