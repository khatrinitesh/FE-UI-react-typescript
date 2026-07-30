import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Code2,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type CardItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

const cards: CardItem[] = [
  {
    id: 1,
    title: "Creative Design",
    description:
      "Build modern and visually engaging interfaces using reusable design components.",
    icon: Palette,
    tag: "Design",
  },
  {
    id: 2,
    title: "Development",
    description:
      "Create scalable and maintainable applications using React and TypeScript.",
    icon: Code2,
    tag: "Technology",
  },
  {
    id: 3,
    title: "Secure Platform",
    description:
      "Protect user data with secure architecture and reliable development practices.",
    icon: ShieldCheck,
    tag: "Security",
  },
];

export function CardHoverEffect() {
  return (
    <section className="min-h-screen bg-slate-100 px-5 py-16 font-brand text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-brand-14 text-secondary dark:text-primary">
              <Sparkles size={16} />
              Our services
            </span>

            <h1 className="mt-5 text-brand-40 text-secondary dark:text-primary">
              Card hover effect
            </h1>

            <p className="mt-3 text-brand-16 leading-7 text-slate-600 dark:text-slate-300">
              Hover over each card to reveal an animated border, icon movement,
              shadow and action button.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <HoverCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type HoverCardProps = {
  card: CardItem;
};

function HoverCard({ card }: HoverCardProps) {
  const Icon = card.icon;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-secondary/15 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary">
      <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 transition-all duration-500 group-hover:right-[-2rem] group-hover:top-[-2rem] group-hover:scale-125" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-secondary transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white dark:text-primary dark:group-hover:bg-primary dark:group-hover:text-slate-950">
            <Icon size={25} />
          </span>

          <span className="rounded-full border border-slate-200 px-3 py-1 text-brand-12 text-slate-500 transition-colors duration-300 group-hover:border-primary group-hover:text-secondary dark:border-slate-700 dark:text-slate-400 dark:group-hover:text-primary">
            {card.tag}
          </span>
        </div>

        <h2 className="mt-7 text-brand-24 text-secondary transition-colors duration-300 dark:text-primary">
          {card.title}
        </h2>

        <p className="mt-3 text-brand-14 leading-7 text-slate-600 dark:text-slate-300">
          {card.description}
        </p>

        <button
          type="button"
          className="mt-7 inline-flex items-center gap-2 text-brand-14 text-secondary transition-all duration-300 group-hover:gap-3 dark:text-primary"
        >
          Explore service
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}
