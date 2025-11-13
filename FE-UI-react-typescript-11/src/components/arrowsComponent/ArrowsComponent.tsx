import React from "react";
import type { ArrowProps } from "../../interface";
import clsx from "clsx";
import "./component/arrow-style.css";
import { ARROW_DIRECTIONS } from "./component/arrowData";

const ArrowsComponent = () => {
  return (
    <>
      <Arrow
        direction={ARROW_DIRECTIONS.LEFT}
        onClick={() => console.log("Left")}
      />
      <Arrow
        direction={ARROW_DIRECTIONS.RIGHT}
        onClick={() => console.log("Right")}
      />
      <Arrow
        direction={ARROW_DIRECTIONS.UP}
        onClick={() => console.log("Top")}
      />
      <Arrow
        direction={ARROW_DIRECTIONS.DOWN}
        onClick={() => console.log("Bittin")}
      />
    </>
  );
};

export default ArrowsComponent;

const Arrow: React.FC<ArrowProps> = ({
  direction,
  onClick,
  className,
  disabled,
}) => {
  const arrowClass = clsx("arrow", direction.toLowerCase(), className, {
    disabled,
  });

  return (
    <div
      className={arrowClass}
      onClick={!disabled ? onClick : undefined}
      role="button"
      aria-disabled={disabled}
    />
  );
};
