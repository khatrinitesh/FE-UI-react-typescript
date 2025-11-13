import { motion } from "framer-motion";
import { useArrowAnimationStore } from "../../logicStore/zustand/useArrowAnimationStore/useArrowAnimationStore";
import { ARROW_ANIMATION_CONFIG } from "../../constants/constants";

type ArrowDirection = "right" | "top" | "bottom" | "left";

type AnimatedArrowProps = {
  direction: ArrowDirection;
};

const getArrowSvg = (direction: ArrowDirection) => {
  switch (direction) {
    case "right":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="#1976d2"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    case "top":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 19V5M6 11l6-6 6 6"
            stroke="#1976d2"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    case "bottom":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M18 13l-6 6-6-6"
            stroke="#1976d2"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    case "left":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 12H5M11 18l-6-6 6-6"
            stroke="#1976d2"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      );
    default:
      return null;
  }
};

const AnimatedArrow: React.FC<AnimatedArrowProps> = ({ direction }) => {
  const { isAnimated, toggleAnimation } = useArrowAnimationStore();
  return (
    <motion.div
      initial={ARROW_ANIMATION_CONFIG.initial}
      animate={
        isAnimated
          ? ARROW_ANIMATION_CONFIG.animate
          : ARROW_ANIMATION_CONFIG.initial
      }
      transition={ARROW_ANIMATION_CONFIG.transition}
      onClick={toggleAnimation}
      style={{ display: "inline-block", cursor: "pointer", margin: "8px" }}
    >
      {getArrowSvg(direction)}
    </motion.div>
  );
};

export default AnimatedArrow;
