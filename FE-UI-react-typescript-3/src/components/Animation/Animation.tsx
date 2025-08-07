import { useAnimationStore } from "../../logicStore/zustand/useAnimationStore/useAnimationStore";
import { ANIMATION_CONFIG } from "../../constants/constants";
import { motion } from "framer-motion";

const Animation = () => {
  const { isAnimated, toggleAnimation } = useAnimationStore();
  return (
    <motion.div
      initial={ANIMATION_CONFIG.initial}
      animate={isAnimated ? ANIMATION_CONFIG.animate : ANIMATION_CONFIG.initial}
      transition={ANIMATION_CONFIG.transition}
      onClick={toggleAnimation}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {/* Example SVG icon */}
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#93102b" strokeWidth="2" />
      </svg>
    </motion.div>
  );
};

export default Animation;
