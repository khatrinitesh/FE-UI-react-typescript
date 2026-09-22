import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";

type ArrowDirection = "left" | "right" | "up" | "down";
type ArrowType = "arrow" | "chevron";

type ArrowsProps = {
  direction?: ArrowDirection;
  type?: ArrowType;
  animated?: boolean;
  className?: string;
};

export function Arrows({ direction = "right", type = "arrow", animated = true, className = "" }: ArrowsProps) {
  const icons = {
    arrow: { left: ArrowLeft, right: ArrowRight, up: ArrowUp, down: ArrowDown },
    chevron: { left: ChevronLeft, right: ChevronRight, up: ChevronRight, down: ChevronRight },
  };

  const animation = {
    left: "group-hover:-translate-x-1",
    right: "group-hover:translate-x-1",
    up: "group-hover:-translate-y-1",
    down: "group-hover:translate-y-1",
  };

  const Icon = icons[type][direction];

  return (
    <span className={`group inline-flex items-center justify-center ${className}`}>
      <Icon className={`size-5 transition-transform duration-200 ${animated ? animation[direction] : ""} ${type === "chevron" && direction === "up" ? "-rotate-90" : ""} ${type === "chevron" && direction === "down" ? "rotate-90" : ""}`} />
    </span>
  );
}
