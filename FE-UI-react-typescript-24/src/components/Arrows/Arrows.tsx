import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import type { AnimatedArrowProps } from "../../interface";
import { rotations } from "../../constants/constants";

const Arrows = ({
  direction = "right",
  size = 28,
  color = "#111",
  loop = true,
  onClick,
  className = "",
  children,
}: AnimatedArrowProps) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  // Hover animation (GSAP)
  const onEnter = () => {
    gsap.to(arrowRef.current, {
      x: direction === "right" ? 6 : direction === "left" ? -6 : 0,
      y: direction === "down" ? 6 : direction === "up" ? -6 : 0,
      scale: 1.15,
      duration: 0.25,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    gsap.to(arrowRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  };
  return (
    <motion.div
      ref={arrowRef}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`
        inline-flex cursor-pointer select-none
        ${rotations[direction]} ${className}
      `}
      style={{ fontSize: size, color }}
      animate={
        loop
          ? {
              y: direction === "up" || direction === "down" ? [0, -6, 0] : 0,
              x: direction === "left" || direction === "right" ? [0, 6, 0] : 0,
            }
          : {}
      }
      transition={
        loop
          ? {
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.4,
              ease: "easeInOut",
            }
          : {}
      }
    >
      {/* If user passes custom SVG/icon */}
      {children ? (
        children
      ) : (
        // Default arrow icon (simple SVG)
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </motion.div>
  );
};

export default Arrows;
