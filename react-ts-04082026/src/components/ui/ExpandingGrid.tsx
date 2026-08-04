import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useId, useState, type KeyboardEvent, type ReactNode } from "react";

import { cn } from "../../utils/cn";

export interface ExpandingGridItem {
  id: string;
  number?: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  icon?: ReactNode;
}

export interface ExpandingGridProps {
  items: ExpandingGridItem[];
  defaultActiveId?: string;
  className?: string;
  onSelect?: (item: ExpandingGridItem) => void;
}

export function ExpandingGrid({
  items,
  defaultActiveId,
  className,
  onSelect,
}: ExpandingGridProps) {
  const componentId = useId();

  const [selectedId, setSelectedId] = useState(
    defaultActiveId ?? items[0]?.id ?? "",
  );

  const selectedItemExists = items.some((item) => item.id === selectedId);

  const activeId = selectedItemExists ? selectedId : items[0]?.id;

  const selectItem = (item: ExpandingGridItem) => {
    setSelectedId(item.id);
    onSelect?.(item);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    item: ExpandingGridItem,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      selectItem(item);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Expandable content grid"
      className={cn(
        "flex h-[680px] w-full flex-col gap-3",
        "tablet:h-[520px] tablet:flex-row",
        className,
      )}
    >
      {items.map((item, index) => {
        const isActive = activeId === item.id;

        return (
          <motion.button
            key={item.id}
            type="button"
            layout
            aria-expanded={isActive}
            aria-controls={`${componentId}-${item.id}-content`}
            onClick={() => selectItem(item)}
            onKeyDown={(event) => {
              handleKeyDown(event, item);
            }}
            onMouseEnter={() => {
              setSelectedId(item.id);
            }}
            onFocus={() => {
              setSelectedId(item.id);
            }}
            animate={{
              flexGrow: isActive ? 3.4 : 1,
            }}
            transition={{
              flexGrow: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className={cn(
              "group relative min-h-0 min-w-0 overflow-hidden",
              "rounded-3xl border border-white/20",
              "bg-secondary text-left text-white",
              "shadow-[0_20px_60px_rgba(30,74,29,0.16)]",
              "outline-none",
              "focus-visible:ring-4 focus-visible:ring-primary/30",
            )}
          >
            {/* Background image */}

            <motion.img
              src={item.image}
              alt={item.imageAlt ?? item.title}
              animate={{
                scale: isActive ? 1 : 1.08,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="absolute inset-0 size-full object-cover"
            />

            {/* Image overlay */}

            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-0",
                "bg-gradient-to-t",
                "from-secondary via-secondary/50 to-transparent",
                "transition-colors duration-500",
                isActive ? "from-secondary/95" : "from-secondary",
              )}
            />

            {/* Top number */}

            <span className="absolute left-5 top-5 z-10 flex items-center gap-3">
              <span
                className={cn(
                  "grid size-10 place-items-center rounded-full",
                  "border border-white/20 bg-white/10",
                  "font-montserrat text-12 font-semibold",
                  "text-white backdrop-blur-md",
                )}
              >
                {item.number ?? String(index + 1).padStart(2, "0")}
              </span>

              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -12,
                    }}
                    className="font-montserrat text-12 font-semibold uppercase tracking-[0.18em] text-primary"
                  >
                    {item.category}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>

            {/* Arrow */}

            <motion.span
              animate={{
                rotate: isActive ? 45 : 0,
                backgroundColor: isActive
                  ? "#3fa938"
                  : "rgba(255,255,255,0.10)",
              }}
              className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full border border-white/20 text-white backdrop-blur-md"
            >
              <ArrowUpRight size={20} />
            </motion.span>

            {/* Content */}

            <span className="absolute inset-x-0 bottom-0 z-10 block p-5 tablet:p-7">
              {!isActive && (
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="block"
                >
                  <span className="block font-montserrat text-12 font-semibold uppercase tracking-[0.16em] text-primary">
                    {item.category}
                  </span>

                  <span className="mt-2 block font-montserrat text-18 font-bold leading-tight text-white">
                    {item.title}
                  </span>
                </motion.span>
              )}

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.span
                    id={`${componentId}-${item.id}-content`}
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 24,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 20,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.12,
                    }}
                    className="block"
                  >
                    {item.icon && (
                      <span className="mb-4 grid size-12 place-items-center rounded-2xl border border-primary/30 bg-primary/15 text-primary backdrop-blur-md">
                        {item.icon}
                      </span>
                    )}

                    <span className="block max-w-xl font-montserrat text-24 font-bold leading-tight text-white tablet:text-36">
                      {item.title}
                    </span>

                    <span className="mt-4 block max-w-lg font-montserrat text-14 leading-6 text-white/70 tablet:text-16 tablet:leading-7">
                      {item.description}
                    </span>

                    <span className="mt-5 inline-flex items-center gap-2 font-montserrat text-14 font-semibold text-primary">
                      Explore more
                      <ArrowUpRight size={17} />
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </motion.button>
        );
      })}
    </section>
  );
}
