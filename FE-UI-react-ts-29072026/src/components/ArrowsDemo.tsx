import {
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CornerDownRight,
  MoveRight,
  RefreshCw,
  Undo2,
  type LucideIcon,
} from "lucide-react";

type ArrowDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "up-left"
  | "up-right"
  | "down-left"
  | "down-right";

type ArrowButtonProps = {
  direction?: ArrowDirection;
  label?: string;
  variant?: "solid" | "outline" | "glass" | "gradient";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const directionIcons: Record<ArrowDirection, LucideIcon> = {
  up: ArrowUp,
  down: ArrowDown,
  left: ArrowLeft,
  right: ArrowRight,
  "up-left": ArrowUpLeft,
  "up-right": ArrowUpRight,
  "down-left": ArrowDownLeft,
  "down-right": ArrowDownRight,
};

const sizeClasses = {
  sm: {
    button: "size-10",
    icon: "size-4",
  },
  md: {
    button: "size-12",
    icon: "size-5",
  },
  lg: {
    button: "size-14",
    icon: "size-6",
  },
};

const variantClasses = {
  solid:
    "bg-white text-black shadow-[0_12px_35px_rgba(255,255,255,0.12)] hover:bg-violet-200",

  outline:
    "border border-white/15 bg-transparent text-white hover:border-violet-400/50 hover:bg-violet-500/10",

  glass:
    "border border-white/10 bg-white/[0.07] text-white backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.12]",

  gradient:
    "bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-[0_15px_40px_rgba(124,58,237,0.3)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.45)]",
};

function getArrowAnimation(direction: ArrowDirection) {
  switch (direction) {
    case "up":
      return "group-hover:-translate-y-1";

    case "down":
      return "group-hover:translate-y-1";

    case "left":
      return "group-hover:-translate-x-1";

    case "right":
      return "group-hover:translate-x-1";

    case "up-left":
      return "group-hover:-translate-x-1 group-hover:-translate-y-1";

    case "up-right":
      return "group-hover:translate-x-1 group-hover:-translate-y-1";

    case "down-left":
      return "group-hover:-translate-x-1 group-hover:translate-y-1";

    case "down-right":
      return "group-hover:translate-x-1 group-hover:translate-y-1";

    default:
      return "";
  }
}

export function ArrowButton({
  direction = "right",
  label,
  variant = "glass",
  size = "md",
  onClick,
}: ArrowButtonProps) {
  const Icon = directionIcons[direction];
  const dimensions = sizeClasses[size];

  if (label) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group inline-flex items-center justify-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${variantClasses[variant]}`}
      >
        {direction.includes("left") && (
          <Icon
            className={`${dimensions.icon} transition-transform duration-300 ${getArrowAnimation(
              direction,
            )}`}
          />
        )}

        <span>{label}</span>

        {!direction.includes("left") && (
          <Icon
            className={`${dimensions.icon} transition-transform duration-300 ${getArrowAnimation(
              direction,
            )}`}
          />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Arrow ${direction}`}
      className={`group inline-flex shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-90 ${dimensions.button} ${variantClasses[variant]}`}
    >
      <Icon
        className={`${dimensions.icon} transition-transform duration-300 ${getArrowAnimation(
          direction,
        )}`}
      />
    </button>
  );
}

type ArrowCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
};

function ArrowCard({
  title,
  description,
  icon: Icon,
  iconClassName = "",
}: ArrowCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.07]">
      <div className="absolute -right-14 -top-14 size-36 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-violet-500/20" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-violet-300">
            <Icon
              className={`size-5 transition-transform duration-300 ${iconClassName}`}
            />
          </div>

          <ArrowUpRight className="size-4 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300" />
        </div>

        <h3 className="font-ogilvy-regular mt-6 text-lg text-white">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
      </div>
    </article>
  );
}

function SliderArrows() {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Previous slide"
        className="group flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white transition hover:border-violet-400/40 hover:bg-violet-500/10 active:scale-90"
      >
        <ChevronLeft className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
      </button>

      <div className="h-px w-20 bg-gradient-to-r from-violet-500 to-cyan-400" />

      <button
        type="button"
        aria-label="Next slide"
        className="group flex size-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-violet-200 active:scale-90"
      >
        <ChevronRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}

function LongArrowButton() {
  return (
    <button
      type="button"
      className="group inline-flex items-center gap-4 text-sm font-semibold text-white"
    >
      <span>Explore projects</span>

      <span className="relative flex w-20 items-center">
        <span className="h-px w-full origin-left bg-white transition-transform duration-300 group-hover:scale-x-110" />

        <ArrowRight className="absolute right-0 size-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-2" />
      </span>
    </button>
  );
}

export default function ArrowsDemo() {
  const arrowCards: ArrowCardProps[] = [
    {
      title: "Directional Arrow",
      description:
        "Use directional arrows for navigation and movement actions.",
      icon: MoveRight,
      iconClassName: "group-hover:translate-x-1",
    },
    {
      title: "Corner Arrow",
      description: "Suitable for nested actions, menus and flow navigation.",
      icon: CornerDownRight,
      iconClassName: "group-hover:translate-x-1 group-hover:translate-y-1",
    },
    {
      title: "Refresh Arrow",
      description: "Use a rotating arrow for refresh and regenerate actions.",
      icon: RefreshCw,
      iconClassName: "group-hover:rotate-180",
    },
    {
      title: "Undo Arrow",
      description: "Display undo, return and previous-action controls.",
      icon: Undo2,
      iconClassName: "group-hover:-translate-x-1 group-hover:-rotate-12",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08080a] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-violet-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 size-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            UI Component
          </p>

          <h1 className="font-ogilvy-regular mt-3 text-4xl tracking-tight sm:text-5xl">
            Arrow Components
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Reusable directional arrows, navigation controls and animated arrow
            buttons built with React, TypeScript and Tailwind CSS.
          </p>
        </header>

        <section>
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Direction controls
            </p>

            <h2 className="font-ogilvy-regular mt-2 text-2xl">
              Circular Arrows
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-7">
            <ArrowButton direction="up" variant="outline" />
            <ArrowButton direction="down" variant="outline" />
            <ArrowButton direction="left" variant="glass" />
            <ArrowButton direction="right" variant="solid" />
            <ArrowButton direction="up-left" variant="gradient" />
            <ArrowButton direction="up-right" variant="gradient" />
            <ArrowButton direction="down-left" variant="glass" />
            <ArrowButton direction="down-right" variant="solid" />
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Button examples
            </p>

            <h2 className="font-ogilvy-regular mt-2 text-2xl">Arrow Buttons</h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-7">
            <ArrowButton direction="right" label="Continue" variant="solid" />

            <ArrowButton
              direction="up-right"
              label="View project"
              variant="gradient"
            />

            <ArrowButton direction="left" label="Go back" variant="outline" />

            <ArrowButton direction="down" label="Scroll down" variant="glass" />

            <LongArrowButton />
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Slider navigation
            </p>

            <h2 className="font-ogilvy-regular mt-2 text-2xl">
              Previous and Next
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <SliderArrows />
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Arrow styles
            </p>

            <h2 className="font-ogilvy-regular mt-2 text-2xl">
              Animated Arrow Cards
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {arrowCards.map((card) => (
              <ArrowCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
