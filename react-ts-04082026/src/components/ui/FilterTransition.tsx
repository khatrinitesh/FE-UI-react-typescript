import { useEffect, useMemo, useRef, useState } from "react";

type Category = "all" | "website" | "application" | "branding";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, "all">;
  color: string;
}

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Websites", value: "website" },
  { label: "Applications", value: "application" },
  { label: "Branding", value: "branding" },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Corporate Website",
    description: "Responsive corporate website and content platform.",
    category: "website",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Product catalogue, checkout, and payment experience.",
    category: "website",
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: 3,
    title: "Sales Dashboard",
    description: "Interactive dashboard for monitoring sales performance.",
    category: "application",
    color: "from-violet-500 to-purple-400",
  },
  {
    id: 4,
    title: "Campaign Platform",
    description: "Customer engagement and campaign management system.",
    category: "application",
    color: "from-fuchsia-500 to-pink-400",
  },
  {
    id: 5,
    title: "Brand Identity",
    description: "Visual identity and complete brand guideline system.",
    category: "branding",
    color: "from-orange-500 to-amber-400",
  },
  {
    id: 6,
    title: "Product Packaging",
    description: "Modern packaging design for consumer products.",
    category: "branding",
    color: "from-rose-500 to-red-400",
  },
];

export default function FilterTransition() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [displayedCategory, setDisplayedCategory] = useState<Category>("all");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const filteredProjects = useMemo(() => {
    if (displayedCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === displayedCategory);
  }, [displayedCategory]);

  const handleCategoryChange = (category: Category) => {
    if (category === selectedCategory || isTransitioning) {
      return;
    }
    setSelectedCategory(category);
    setIsTransitioning(true);
    timeoutRef.current = window.setTimeout(() => {
      setDisplayedCategory(category);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold tracking-wider text-[#009eff] uppercase">
            Our Projects
          </span>

          <h2 className="mt-2 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-slate-900">
            Filter with transitions
          </h2>

          <p className="mt-3 text-[#525659]">
            Select a category to smoothly transition between project groups.
          </p>
        </header>

        <div
          role="group"
          aria-label="Project filters"
          className="mb-8 flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategoryChange(category.value)}
                aria-pressed={isActive}
                className={`
                  rounded-full border px-5 py-2.5 text-sm font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "border-[#009eff] bg-[#009eff] text-white shadow-lg shadow-[#009eff]/20"
                      : "border-slate-300 bg-white text-slate-700 hover:border-[#009eff] hover:text-[#009eff]"
                  }
                `}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="mb-5 text-sm text-slate-500">
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>

        <div
          aria-busy={isTransitioning}
          className={`
            grid grid-cols-1 gap-6 transition-all duration-300 ease-in-out
            motion-reduce:transform-none motion-reduce:transition-none
            sm:grid-cols-2 lg:grid-cols-3
            ${
              isTransitioning
                ? "translate-y-3 scale-[0.98] opacity-0"
                : "translate-y-0 scale-100 opacity-100"
            }
          `}
        >
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`h-2 bg-linear-to-r ${project.color}`} />

              <div className="p-6">
                <span className="inline-flex rounded-full bg-[#009eff]/10 px-3 py-1 text-xs font-medium text-[#009eff] capitalize">
                  {project.category}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#525659]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
