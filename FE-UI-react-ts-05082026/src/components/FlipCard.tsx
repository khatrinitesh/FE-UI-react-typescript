import { useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
  className?: string;
};

export function FlipCard({ front, back, className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((value) => !value)}
      className={cn(
        "group h-80 w-full cursor-pointer perspective-[1000px]",
        className,
      )}
      aria-label="Flip card"
      aria-pressed={flipped}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
          {front}
        </div>

        <div className="absolute inset-0 overflow-hidden rounded-2xl backface-hidden [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </button>
  );
}
