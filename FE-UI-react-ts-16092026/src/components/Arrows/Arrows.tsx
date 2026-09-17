import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpLeft, ArrowUpRight } from "lucide-react";

import "./Arrows.css";

export const Arrows = () => {
  return (
    <div className="arrows">
      <button className="arrowButton">
        <ArrowUp />
      </button>

      <button className="arrowButton">
        <ArrowDown />
      </button>

      <button className="arrowButton">
        <ArrowLeft />
      </button>

      <button className="arrowButton">
        <ArrowRight />
      </button>

      <button className="arrowButton">
        <ArrowUpRight />
      </button>

      <button className="arrowButton">
        <ArrowDownRight />
      </button>

      <button className="arrowButton">
        <ArrowDownLeft />
      </button>

      <button className="arrowButton">
        <ArrowUpLeft />
      </button>
    </div>
  );
};
