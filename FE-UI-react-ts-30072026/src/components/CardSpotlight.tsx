import {
  ArrowUpRight,
  Code2,
  Palette,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useRef, type CSSProperties, type MouseEvent } from "react";

type SpotlightCardItem = {
  id: number;
  title: string;
  description: string;
  label: string;
  icon: LucideIcon;
};

type SpotlightStyle = CSSProperties & {
  "--mouse-x": string;
  "--mouse-y": string;
};

const cards: SpotlightCardItem[] = [
  {
    id: 1,
    title: "Creative Design",
    description:
      "Create modern, accessible and visually consistent digital experiences.",
    label: "Design",
    icon: Palette,
  },
  {
    id: 2,
    title: "React Development",
    description:
      "Build scalable and maintainable applications using React and TypeScript.",
    label: "Development",
    icon: Code2,
  },
  {
    id: 3,
    title: "Secure Platform",
    description:
      "Protect application data using reliable and secure development practices.",
    label: "Security",
    icon: ShieldCheck,
  },
];

export function CardSpotlight() {
  return (
    <section className="min-h-screen bg-slate-100 px-5 py-16 font-brand text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-brand-14 text-secondary dark:text-primary">
              <Sparkles size={16} />
              Interactive cards
            </span>

            <h1 className="mt-5 text-brand-40 text-secondary dark:text-primary">
              Card spotlight effect
            </h1>

            <p className="mt-3 text-brand-16 leading-7 text-slate-600 dark:text-slate-300">
              Move your cursor over a card to reveal a spotlight that follows
              the pointer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <SpotlightCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type SpotlightCardProps = {
  card: SpotlightCardItem;
};

function SpotlightCard({ card }: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const Icon = card.icon;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const element = cardRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    element.style.setProperty("--mouse-x", `${mouseX}px`);
    element.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const initialStyle: SpotlightStyle = {
    "--mouse-x": "50%",
    "--mouse-y": "50%",
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={initialStyle}
      className="group relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white p-px shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10 dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Spotlight border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(260px circle at var(--mouse-x) var(--mouse-y), var(--color-primary), transparent 70%)",
        }}
      />

      {/* Spotlight glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-px rounded-[calc(1.5rem-1px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), color-mix(in srgb, var(--color-primary) 22%, transparent), transparent 55%)",
        }}
      />

      <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-white p-7 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-4">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-secondary transition duration-500 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white dark:text-primary dark:group-hover:bg-primary dark:group-hover:text-slate-950">
            <Icon size={25} />
          </span>

          <span className="rounded-full border border-slate-200 px-3 py-1 text-brand-12 text-slate-500 transition group-hover:border-primary group-hover:text-secondary dark:border-slate-700 dark:text-slate-400 dark:group-hover:text-primary">
            {card.label}
          </span>
        </div>

        <h2 className="mt-7 text-brand-24 text-secondary dark:text-primary">
          {card.title}
        </h2>

        <p className="mt-3 text-brand-14 leading-7 text-slate-600 dark:text-slate-300">
          {card.description}
        </p>

        <button
          type="button"
          className="mt-7 inline-flex items-center gap-2 text-brand-14 text-secondary transition-all duration-300 group-hover:gap-3 dark:text-primary"
        >
          Learn more
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}
