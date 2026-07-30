import {
  ChevronDown,
  CirclePlus,
  Layers3,
  MousePointerClick,
  Palette,
  Plus,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";

type AccordionItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const initialItems: AccordionItem[] = [
  {
    id: 4,
    title: "Accordion",
    description:
      "Create expandable content sections with smooth open and close transitions.",
    icon: Layers3,
  },
  {
    id: 5,
    title: "ActiveClass",
    description:
      "Apply custom styling to the currently selected or active accordion item.",
    icon: MousePointerClick,
  },
  {
    id: 6,
    title: "Add",
    description:
      "Dynamically add new items to the accordion using component state.",
    icon: CirclePlus,
  },
  {
    id: 7,
    title: "AddClass",
    description:
      "Pass additional classes to customize individual accordion components.",
    icon: Palette,
  },
];

type AccordionProps = {
  items: AccordionItem[];
  activeClassName?: string;
  itemClassName?: string;
  allowMultiple?: boolean;
  children?: ReactNode;
};

export function Accordion({
  items,
  activeClassName = "border-violet-400/60 bg-violet-500/10 shadow-[0_15px_45px_rgba(139,92,246,0.15)]",
  itemClassName = "border-white/10 bg-white/[0.04]",
  allowMultiple = false,
  children,
}: AccordionProps) {
  const [activeItems, setActiveItems] = useState<number[]>([items[0]?.id]);

  const handleToggle = (id: number) => {
    setActiveItems((currentItems) => {
      const isActive = currentItems.includes(id);

      if (allowMultiple) {
        return isActive
          ? currentItems.filter((itemId) => itemId !== id)
          : [...currentItems, id];
      }

      return isActive ? [] : [id];
    });
  };

  return (
    <div className="w-full space-y-3">
      {items.map((item) => {
        const isActive = activeItems.includes(item.id);
        const Icon = item.icon;

        return (
          <article
            key={item.id}
            className={`group overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
              isActive ? activeClassName : itemClassName
            }`}
          >
            <button
              type="button"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isActive}
              aria-controls={`accordion-content-${item.id}`}
              className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
            >
              <span
                className={`flex size-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "rotate-3 border-violet-400/40 bg-violet-500 text-white shadow-lg shadow-violet-500/20"
                    : "border-white/10 bg-white/5 text-zinc-400 group-hover:text-white"
                }`}
              >
                <Icon className="size-5" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Component {item.id.toString().padStart(2, "0")}
                </span>

                <span
                  className={`font-ogilvy-regular block text-lg transition-colors ${
                    isActive ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {item.title}
                </span>
              </span>

              <span
                className={`flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isActive
                    ? "rotate-180 border-violet-400/30 bg-violet-500/20 text-violet-300"
                    : "border-white/10 bg-white/5 text-zinc-500"
                }`}
              >
                <ChevronDown className="size-4" />
              </span>
            </button>

            <div
              id={`accordion-content-${item.id}`}
              className={`grid transition-all duration-300 ease-in-out ${
                isActive
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:ml-[76px] sm:px-0 sm:pr-5">
                  <p className="text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      React
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      TypeScript
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      {children}
    </div>
  );
}

export default function AccordionDemo() {
  const [items, setItems] = useState<AccordionItem[]>(initialItems);

  const handleAddItem = () => {
    const newId = Math.max(...items.map((item) => item.id), 0) + 1;

    setItems((currentItems) => [
      ...currentItems,
      {
        id: newId,
        title: `New Component ${newId}`,
        description:
          "This accordion item was dynamically added using React component state.",
        icon: Sparkles,
      },
    ]);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070709] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-0 top-0 size-[400px] rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 size-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <section className="relative mx-auto max-w-3xl">
        <header className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
            <Sparkles className="size-3.5" />
            Interactive UI Component
          </div>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="font-ogilvy-regular text-4xl tracking-tight sm:text-5xl">
                Accordion UI
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
                Expand content, manage active classes and dynamically add new
                accordion items.
              </p>
            </div>

            <button
              type="button"
              onClick={handleAddItem}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] hover:bg-violet-200 active:scale-95"
            >
              <Plus className="size-4" />
              Add item
            </button>
          </div>
        </header>

        <Accordion
          items={items}
          allowMultiple
          activeClassName="border-violet-400/50 bg-gradient-to-r from-violet-500/15 to-cyan-500/5 shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
          itemClassName="border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.06]"
        />
      </section>
    </main>
  );
}
