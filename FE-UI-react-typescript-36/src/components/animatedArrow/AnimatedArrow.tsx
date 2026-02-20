import { motion } from "framer-motion";
import { ARROW_ANIMATION, ARROW_CONFIG } from "../../constants/constants";

interface AnimatedArrowProps {
  id: string;
}

const AnimatedArrow = ({ id }: AnimatedArrowProps) => {
  const { activeId, toggle } = useArrowStore(); // ✅ call the Zustand hook
  const isActive = activeId === id;
  return (
    <button
      onClick={() => toggle(id)}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        padding: 4,
      }}
    >
      <motion.svg
        width={ARROW_CONFIG.SIZE}
        height={ARROW_CONFIG.SIZE}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={ARROW_CONFIG.STROKE_WIDTH}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: isActive ? ARROW_CONFIG.ROTATION_DEG : 0 }}
        transition={ARROW_ANIMATION}
      >
        <polyline points="6 9 12 15 18 9" />
      </motion.svg>
    </button>
  );
};

export default AnimatedArrow;
function useArrowStore(): { activeId: any; toggle: any } {
  throw new Error("Function not implemented.");
}
