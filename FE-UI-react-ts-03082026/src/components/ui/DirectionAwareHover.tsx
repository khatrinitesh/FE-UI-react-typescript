import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Direction = "top" | "right" | "bottom" | "left";

function getDirection(event: React.MouseEvent<HTMLDivElement>): Direction {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();

  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  const angle = Math.atan2(y, x) * (180 / Math.PI);

  if (angle >= -45 && angle < 45) return "right";
  if (angle >= 45 && angle < 135) return "bottom";
  if (angle >= -135 && angle < -45) return "top";

  return "left";
}

const directionClasses: Record<Direction, string> = {
  top: "-translate-y-full translate-x-0",
  right: "translate-x-full translate-y-0",
  bottom: "translate-y-full translate-x-0",
  left: "-translate-x-full translate-y-0",
};

export default function DirectionAwareHover() {
  const [direction, setDirection] = useState<Direction>("bottom");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setDirection(getDirection(event));
    setIsHovered(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setDirection(getDirection(event));
    setIsHovered(false);
  };

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-6">
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 shadow-xl"
      >
        <img
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80"
          alt="Modern building"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div
          className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-blue-950/95 via-blue-900/80 to-blue-700/60 p-6 text-white transition-transform duration-300 ease-out ${
            isHovered
              ? "translate-x-0 translate-y-0"
              : directionClasses[direction]
          }`}
        >
          <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
            Architecture
          </span>

          <h2 className="text-2xl font-bold">Modern Workspace</h2>

          <p className="mt-2 text-sm leading-6 text-blue-100">
            A direction-aware overlay that follows the user’s cursor.
          </p>

          <button
            type="button"
            className="mt-5 flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-950 transition hover:bg-blue-100"
          >
            View project
            <ArrowUpRight size={16} />
          </button>
        </div>
      </article>
    </main>
  );
}
