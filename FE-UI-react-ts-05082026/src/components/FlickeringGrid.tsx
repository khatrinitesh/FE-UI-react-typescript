import { motion } from "framer-motion";
import { cn } from "../utils/cn";

type FlickeringGridProps = {
  className?: string;
  columns?: number;
  rows?: number;
};

export function FlickeringGrid({
  className,
  columns = 24,
  rows = 14,
}: FlickeringGridProps) {
  const cells = Array.from({ length: columns * rows });

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 grid overflow-hidden opacity-50",
        className,
      )}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      aria-hidden="true"
    >
      {cells.map((_, index) => (
        <motion.span
          key={index}
          className="border border-primary/20"
          animate={{
            backgroundColor: [
              "rgba(245, 183, 0, 0)",
              "rgba(245, 183, 0, 0.18)",
              "rgba(245, 183, 0, 0)",
            ],
          }}
          transition={{
            duration: 1.2 + (index % 6) * 0.35,
            repeat: Infinity,
            repeatType: "mirror",
            delay: (index % 13) * 0.12,
          }}
        />
      ))}
    </div>
  );
}
