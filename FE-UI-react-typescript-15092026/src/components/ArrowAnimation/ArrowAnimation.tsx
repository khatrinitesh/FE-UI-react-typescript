import { ArrowUp, ArrowRight, ArrowDown, ArrowLeft } from "lucide-react";

import "./ArrowAnimation.css";

interface ArrowItem {
  id: number;
  title: string;
  direction: "up" | "right" | "down" | "left";
}

const arrowData: ArrowItem[] = [
  {
    id: 1,
    title: "Up",
    direction: "up",
  },
  {
    id: 2,
    title: "Right",
    direction: "right",
  },
  {
    id: 3,
    title: "Down",
    direction: "down",
  },
  {
    id: 4,
    title: "Left",
    direction: "left",
  },
];

export default function ArrowAnimation() {
  return (
    <main className="arrow-page">
      {/* Heading */}

      <div className="arrow-heading">
        <span>ANIMATION</span>

        <h1>Arrow Animation</h1>

        <p>Hover over the arrows to see the animation.</p>
      </div>

      {/* Arrows */}

      <div className="arrow-grid">
        {arrowData.map((item) => {
          const Icon =
            item.direction === "up"
              ? ArrowUp
              : item.direction === "right"
                ? ArrowRight
                : item.direction === "down"
                  ? ArrowDown
                  : ArrowLeft;

          return (
            <button
              key={item.id}
              type="button"
              className={`arrow-card arrow-${item.direction}`}
            >
              <span className="arrow-icon">
                <Icon size={32} />
              </span>

              <span className="arrow-title">{item.title}</span>
            </button>
          );
        })}
      </div>
    </main>
  );
}
