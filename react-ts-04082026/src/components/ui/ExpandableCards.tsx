import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useId, useState, type KeyboardEvent } from "react";

import { cn } from "../../utils/cn";
import { Button } from "./Button";

export interface ExpandableCardItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  category?: string;
  ctaLabel?: string;
}

export interface ExpandableCardsProps {
  cards: ExpandableCardItem[];
  className?: string;
  onAction?: (card: ExpandableCardItem) => void;
}

export function ExpandableCards({
  cards,
  className,
  onAction,
}: ExpandableCardsProps) {
  const componentId = useId();

  const [selectedCard, setSelectedCard] = useState<ExpandableCardItem | null>(
    null,
  );

  useEffect(() => {
    if (!selectedCard) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCard(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCard]);

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    card: ExpandableCardItem,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      setSelectedCard(card);
    }
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <section
        className={cn(
          "grid gap-6 tablet:grid-cols-2 desktop-sm:grid-cols-3",
          className,
        )}
      >
        {cards.map((card) => (
          <motion.article
            key={card.id}
            layoutId={`${componentId}-card-${card.id}`}
            role="button"
            tabIndex={0}
            aria-label={`Open ${card.title}`}
            onClick={() => setSelectedCard(card)}
            onKeyDown={(event) => {
              handleCardKeyDown(event, card);
            }}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className={cn(
              "group cursor-pointer overflow-hidden rounded-3xl",
              "border border-secondary/15 bg-white",
              "shadow-[0_15px_50px_rgba(30,74,29,0.08)]",
              "outline-none transition-shadow duration-300",
              "hover:shadow-[0_25px_70px_rgba(30,74,29,0.16)]",
              "focus-visible:ring-4 focus-visible:ring-primary/25",
            )}
          >
            <motion.figure
              layoutId={`${componentId}-image-${card.id}`}
              className="relative aspect-[4/3] overflow-hidden bg-secondary/10"
            >
              <img
                src={card.image}
                alt={card.imageAlt ?? card.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent"
              />

              {card.category && (
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-secondary/70 px-3 py-1.5 font-montserrat text-12 font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                  {card.category}
                </span>
              )}
            </motion.figure>

            <section className="p-6">
              <header className="flex items-start justify-between gap-4">
                <section className="min-w-0">
                  <motion.h2
                    layoutId={`${componentId}-title-${card.id}`}
                    className="font-montserrat text-20 font-bold text-secondary"
                  >
                    {card.title}
                  </motion.h2>

                  <motion.p
                    layoutId={`${componentId}-subtitle-${card.id}`}
                    className="mt-1 font-montserrat text-14 font-medium text-primary"
                  >
                    {card.subtitle}
                  </motion.p>
                </section>

                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight size={19} />
                </span>
              </header>

              <p className="mt-4 line-clamp-2 font-montserrat text-14 leading-6 text-secondary/65">
                {card.description}
              </p>
            </section>
          </motion.article>
        ))}
      </section>

      <AnimatePresence>
        {selectedCard && (
          <>
            {/* Background overlay */}

            <motion.button
              type="button"
              aria-label="Close expanded card"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeCard}
              className="fixed inset-0 z-[100] cursor-default bg-secondary/70 backdrop-blur-md"
            />

            {/* Expanded card */}

            <section className="pointer-events-none fixed inset-0 z-[110] grid place-items-center overflow-y-auto p-4 tablet:p-8">
              <motion.article
                layoutId={`${componentId}-card-${selectedCard.id}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`${componentId}-dialog-title`}
                className={cn(
                  "pointer-events-auto relative w-full max-w-3xl",
                  "max-h-[calc(100dvh-2rem)] overflow-y-auto",
                  "rounded-3xl border border-white/20 bg-white",
                  "shadow-[0_30px_100px_rgba(0,0,0,0.35)]",
                )}
              >
                <button
                  type="button"
                  aria-label="Close card"
                  onClick={closeCard}
                  className={cn(
                    "absolute right-4 top-4 z-30",
                    "grid size-11 place-items-center rounded-full",
                    "border border-white/20 bg-secondary/70",
                    "text-white backdrop-blur-md",
                    "transition-colors hover:bg-secondary",
                    "focus-visible:outline-none",
                    "focus-visible:ring-4 focus-visible:ring-white/30",
                  )}
                >
                  <X size={21} />
                </button>

                <motion.figure
                  layoutId={`${componentId}-image-${selectedCard.id}`}
                  className="relative aspect-[16/8] overflow-hidden bg-secondary/10"
                >
                  <img
                    src={selectedCard.image}
                    alt={selectedCard.imageAlt ?? selectedCard.title}
                    className="size-full object-cover"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent"
                  />

                  {selectedCard.category && (
                    <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-secondary/70 px-3 py-1.5 font-montserrat text-12 font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                      {selectedCard.category}
                    </span>
                  )}
                </motion.figure>

                <section className="p-6 tablet:p-8">
                  <header className="flex flex-col gap-5 tablet:flex-row tablet:items-start tablet:justify-between">
                    <section>
                      <motion.h2
                        id={`${componentId}-dialog-title`}
                        layoutId={`${componentId}-title-${selectedCard.id}`}
                        className="font-montserrat text-28 font-bold text-secondary tablet:text-36"
                      >
                        {selectedCard.title}
                      </motion.h2>

                      <motion.p
                        layoutId={`${componentId}-subtitle-${selectedCard.id}`}
                        className="mt-2 font-montserrat text-16 font-semibold text-primary"
                      >
                        {selectedCard.subtitle}
                      </motion.p>
                    </section>

                    <Button
                      type="button"
                      icon={<ArrowUpRight size={18} />}
                      iconPosition="right"
                      onClick={() => {
                        onAction?.(selectedCard);
                      }}
                      className="shrink-0"
                    >
                      {selectedCard.ctaLabel ?? "Learn more"}
                    </Button>
                  </header>

                  <p className="mt-6 whitespace-pre-line font-montserrat text-16 leading-8 text-secondary/70">
                    {selectedCard.description}
                  </p>
                </section>
              </motion.article>
            </section>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
