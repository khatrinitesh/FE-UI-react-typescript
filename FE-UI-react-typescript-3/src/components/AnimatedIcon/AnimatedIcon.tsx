import { ICON_ANIMATION } from "../../constants/constants";
import { useIconAnimationStore } from "../../logicStore/zustand/useIconAnimationStore/useIconAnimationStore";
import { motion } from "framer-motion";

const AnimatedIcon = () => {
  const { isAnimated, toggleAnimation } = useIconAnimationStore();
  return (
    <motion.div
      initial={ICON_ANIMATION.initial}
      animate={isAnimated ? ICON_ANIMATION.animate : ICON_ANIMATION.initial}
      transition={ICON_ANIMATION.transition}
      onClick={toggleAnimation}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {/* Replace with your icon */}
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#1976d2" strokeWidth="2" />
        <path d="M12 8v4l3 2" stroke="#1976d2" strokeWidth="2" />
      </svg>
    </motion.div>
  );
};

export default AnimatedIcon;
