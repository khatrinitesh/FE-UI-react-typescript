import { useMemo, useState } from "react";

type Category = "all" | "website" | "application" | "branding";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<Category, "all">;
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
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Product catalogue, checkout, and payment experience.",
    category: "website",
  },
  {
    id: 3,
    title: "Sales Dashboard",
    description: "Interactive dashboard for tracking sales performance.",
    category: "application",
  },
  {
    id: 4,
    title: "Campaign Platform",
    description: "Customer engagement and campaign management application.",
    category: "application",
  },
  {
    id: 5,
    title: "Brand Identity",
    description: "Complete visual identity and brand guideline system.",
    category: "branding",
  },
  {
    id: 6,
    title: "Product Packaging",
    description: "Modern packaging design for a consumer product.",
    category: "branding",
  },
];

export default function FilterElements() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <span className="text-sm font-semibold tracking-wider text-[#009eff] uppercase">
            Our Work
          </span>

          <h2 className="mt-2 text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-slate-900">
            Explore our projects
          </h2>

          <p className="mt-3 max-w-2xl text-[#525659]">
            Select a category to filter the displayed project elements.
          </p>
        </header>

        <div
          role="group"
          aria-label="Project filters"
          className="mb-8 flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                aria-pressed={isActive}
                className={`
                  rounded-full border px-5 py-2.5 text-sm font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "border-[#009eff] bg-[#009eff] text-white shadow-md shadow-[#009eff]/20"
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

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#009eff]/40 hover:shadow-xl"
              >
                <span className="inline-flex rounded-full bg-[#009eff]/10 px-3 py-1 text-xs font-medium text-[#009eff] capitalize">
                  {project.category}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#525659]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
            No matching elements found.
          </div>
        )}
      </div>
    </section>
  );
}
