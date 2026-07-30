import { Code2, Layers3, Palette, Rocket, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type SectionItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  backgroundClass: string;
  textClass: string;
  mutedTextClass: string;
  badgeClass: string;
  icon: React.ReactNode;
};

const sections: SectionItem[] = [
  {
    id: "welcome",
    label: "Introduction",
    title: "Background changes while scrolling",
    description:
      "Scroll through each section to change the page background with a smooth color transition.",
    backgroundClass: "bg-white",
    textClass: "text-slate-950",
    mutedTextClass: "text-slate-600",
    badgeClass: "bg-primary/20 text-secondary",
    icon: <Sparkles size={26} />,
  },
  {
    id: "design",
    label: "Design",
    title: "Create visually engaging interfaces",
    description:
      "Use brand colors, responsive typography and reusable components to create a consistent design system.",
    backgroundClass: "bg-primary",
    textClass: "text-secondary",
    mutedTextClass: "text-secondary/75",
    badgeClass: "bg-white/35 text-secondary",
    icon: <Palette size={26} />,
  },
  {
    id: "development",
    label: "Development",
    title: "Build scalable React applications",
    description:
      "React and TypeScript provide reusable logic, strong typing and maintainable application architecture.",
    backgroundClass: "bg-secondary",
    textClass: "text-white",
    mutedTextClass: "text-white/70",
    badgeClass: "bg-white/15 text-primary",
    icon: <Code2 size={26} />,
  },
  {
    id: "components",
    label: "Components",
    title: "Organize everything into reusable blocks",
    description:
      "Cards, forms, navigation, callouts and interactive sections can share the same brand styles.",
    backgroundClass: "bg-slate-100",
    textClass: "text-slate-950",
    mutedTextClass: "text-slate-600",
    badgeClass: "bg-secondary/10 text-secondary",
    icon: <Layers3 size={26} />,
  },
  {
    id: "launch",
    label: "Launch",
    title: "Ready to build your next project",
    description:
      "Combine responsive layouts, animations and your brand design tokens into a production-ready experience.",
    backgroundClass: "bg-slate-950",
    textClass: "text-white",
    mutedTextClass: "text-slate-300",
    badgeClass: "bg-primary/15 text-primary",
    icon: <Rocket size={26} />,
  },
];

export function BackgroundOnScroll() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio - firstEntry.intersectionRatio,
          );

        const mostVisibleSection = visibleSections[0];

        if (!mostVisibleSection) return;

        const sectionIndex = Number(
          mostVisibleSection.target.getAttribute("data-index"),
        );

        setActiveSection(sectionIndex);
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const currentSection = sections[activeSection];

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      className={[
        "min-h-screen font-brand transition-colors duration-700 ease-in-out",
        currentSection.backgroundClass,
        currentSection.textClass,
      ].join(" ")}
    >
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-5">
        <nav className="container mx-auto flex items-center justify-between rounded-2xl border border-white/25 bg-white/20 px-5 py-3 shadow-lg backdrop-blur-xl">
          <button
            type="button"
            onClick={() => scrollToSection(0)}
            className="flex items-center gap-3"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-secondary">
              B
            </span>

            <span className="hidden text-brand-18 sm:block">BrandUI</span>
          </button>

          <div className="flex items-center gap-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(index)}
                aria-label={`Go to ${section.label}`}
                className={[
                  "h-2.5 rounded-full transition-all duration-300",
                  activeSection === index
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-current opacity-30 hover:opacity-60",
                ].join(" ")}
              />
            ))}
          </div>

          <span className="hidden text-brand-12 opacity-60 sm:block">
            {String(activeSection + 1).padStart(2, "0")} /{" "}
            {String(sections.length).padStart(2, "0")}
          </span>
        </nav>
      </header>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          data-index={index}
          ref={(element) => {
            sectionRefs.current[index] = element;
          }}
          className="flex min-h-screen scroll-mt-24 items-center px-5 py-28"
        >
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-brand-14",
                    section.badgeClass,
                  ].join(" ")}
                >
                  {section.icon}
                  {section.label}
                </span>

                <h2 className="mt-7 max-w-4xl text-brand-64 leading-[1.05]">
                  {section.title}
                </h2>

                <p
                  className={[
                    "mt-6 max-w-2xl text-brand-18 leading-8",
                    section.mutedTextClass,
                  ].join(" ")}
                >
                  {section.description}
                </p>

                <button
                  type="button"
                  onClick={() =>
                    scrollToSection(
                      index === sections.length - 1 ? 0 : index + 1,
                    )
                  }
                  className="mt-9 rounded-xl bg-primary px-6 py-3 text-brand-14 text-secondary transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {index === sections.length - 1
                    ? "Back to top"
                    : "Continue scrolling"}
                </button>
              </div>

              <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-current opacity-10" />

                <div className="absolute inset-[12%] rounded-full border border-current opacity-15" />

                <div className="absolute inset-[24%] rounded-full border border-current opacity-20" />

                <div className="flex size-32 items-center justify-center rounded-2xl bg-primary text-secondary shadow-2xl">
                  {section.icon}
                </div>

                <span className="absolute left-4 top-1/4 size-4 rounded-full bg-primary" />
                <span className="absolute bottom-1/4 right-4 size-7 rounded-full bg-current opacity-20" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
