import {
  BarChart3,
  Layers3,
  Palette,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";

type ColumnCard = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  label: string;
  value: string;
};

const cards: ColumnCard[] = [
  {
    id: 1,
    title: "Brand Design",
    description:
      "Create consistent visual experiences using reusable brand components.",
    icon: Palette,
    label: "Projects",
    value: "24",
  },
  {
    id: 2,
    title: "Fast Performance",
    description:
      "Optimized components provide fast rendering across screen sizes.",
    icon: Zap,
    label: "Performance",
    value: "98%",
  },
  {
    id: 3,
    title: "Component Library",
    description:
      "Build interfaces faster with flexible and reusable UI components.",
    icon: Layers3,
    label: "Components",
    value: "120+",
  },
  {
    id: 4,
    title: "Secure Platform",
    description:
      "Protect application data with secure authentication and permissions.",
    icon: ShieldCheck,
    label: "Security",
    value: "A+",
  },
  {
    id: 5,
    title: "Smart Features",
    description:
      "Improve workflows with automation and intelligent recommendations.",
    icon: Sparkles,
    label: "Automations",
    value: "32",
  },
  {
    id: 6,
    title: "Analytics",
    description:
      "Track performance, customer activity, and important business metrics.",
    icon: BarChart3,
    label: "Growth",
    value: "+42%",
  },
  {
    id: 4,
    title: "Secure Platform",
    description:
      "Protect application data with secure authentication and permissions.",
    icon: ShieldCheck,
    label: "Security",
    value: "A+",
  },
  {
    id: 5,
    title: "Smart Features",
    description:
      "Improve workflows with automation and intelligent recommendations.",
    icon: Sparkles,
    label: "Automations",
    value: "32",
  },
  {
    id: 6,
    title: "Analytics",
    description:
      "Track performance, customer activity, and important business metrics.",
    icon: BarChart3,
    label: "Growth",
    value: "+42%",
  },
];

export default function ColumnCards() {
  return (
    <section className="min-h-screen bg-slate-100 px-5 py-10 font-montserrat">
      <div className="mx-auto max-w-360">
        <header className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-12 font-semibold uppercase tracking-[0.18em] text-primary">
            Our features
          </p>

          <h1 className="mt-3 font-arialnb text-40 font-bold leading-tight text-secondary">
            Responsive Column Cards
          </h1>

          <p className="mt-4 text-16 leading-7 text-secondary/70">
            A responsive card layout that automatically changes the number of
            columns based on the available screen width.
          </p>
        </header>

        <div
          className="
            grid gap-5 grid-cols-1 tablet-portrait:grid-cols-2 desktop-sm:grid-cols-3 desktop-3xl:grid-cols-4 desktop-4xl:grid-cols-5
          "
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.id}
                className="
                  group relative overflow-hidden rounded-3xl
                  border border-slate-200 bg-white p-6
                  shadow-sm transition duration-300
                  hover:-translate-y-2
                  hover:border-primary/40
                  hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]
                "
              >
                <span
                  className="
                    absolute right-5 top-4 font-arialnb
                    text-40 font-bold text-slate-100
                    transition group-hover:text-primary/10
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="
                    relative flex h-14 w-14 items-center
                    justify-center rounded-2xl bg-primary/10
                    text-primary transition duration-300
                    group-hover:rotate-6 group-hover:bg-primary
                    group-hover:text-white
                  "
                >
                  <Icon size={26} strokeWidth={2} aria-hidden="true" />
                </div>

                <h2 className="mt-6 font-arialnb text-24 font-bold text-secondary">
                  {card.title}
                </h2>

                <p className="mt-3 text-14 leading-6 text-secondary/70">
                  {card.description}
                </p>

                <div className="mt-7 border-t border-slate-200 pt-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-12 font-semibold uppercase tracking-[0.1em] text-secondary/60">
                        {card.label}
                      </p>

                      <p className="mt-1 font-arialnb text-28 font-bold text-primary">
                        {card.value}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label={`View ${card.title}`}
                      className="
                        flex h-11 w-11 items-center justify-center
                        rounded-full border border-slate-200
                        text-20 text-secondary transition
                        group-hover:border-primary
                        group-hover:bg-primary
                        group-hover:text-white
                      "
                    >
                      →
                    </button>
                  </div>
                </div>

                <div
                  className="
                    absolute bottom-0 left-0 h-1 w-0
                    bg-primary transition-all duration-300
                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
