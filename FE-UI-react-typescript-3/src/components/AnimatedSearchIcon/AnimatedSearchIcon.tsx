import { SEARCH_ANIMATION } from "../../constants/constants";
import { useSearchAnimationStore } from "../../logicStore/zustand/useSearchAnimationStore/useSearchAnimationStore";
import { motion } from "framer-motion";

const AnimatedSearchIcon = () => {
  const { isSearching, toggleSearching } = useSearchAnimationStore();
  return (
    <motion.div
      initial={SEARCH_ANIMATION.initial}
      animate={
        isSearching ? SEARCH_ANIMATION.animate : SEARCH_ANIMATION.initial
      }
      transition={SEARCH_ANIMATION.transition}
      onClick={toggleSearching}
      style={{ display: "inline-block", cursor: "pointer" }}
      title="Search"
    >
      {/* Simple search (magnifier) SVG */}
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#1976d2" strokeWidth="2" />
        <line
          x1="16"
          y1="16"
          x2="21"
          y2="21"
          stroke="#1976d2"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedSearchIcon;
