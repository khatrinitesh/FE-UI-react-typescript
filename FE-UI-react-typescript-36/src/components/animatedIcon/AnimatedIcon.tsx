import { motion } from "framer-motion";
import { ICON_ANIMATION, ICON_CONFIG } from "../../constants/constants";
import { useIconStore } from "../../store/useIconStore";

interface AnimatedIconProps {
  id: string;
}

const AnimatedIcon = ({ id }: AnimatedIconProps) => {
  const { activeId, toggle } = useIconStore();
  const isActive = activeId === id;
  return (
    <>
      <button
        onClick={() => toggle(id)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 8,
        }}
      >
        <motion.svg
          width={ICON_CONFIG.SIZE}
          height={ICON_CONFIG.SIZE}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={ICON_CONFIG.STROKE_WIDTH}
          strokeLinecap="round"
        >
          {/* Horizontal line (always visible) */}
          <motion.line x1="5" y1="12" x2="19" y2="12" />

          {/* Vertical line (animates out when active) */}
          <motion.line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
            animate={{
              opacity: isActive ? 0 : 1,
              rotate: isActive ? 90 : 0,
            }}
            transition={ICON_ANIMATION}
            style={{ originX: "50%", originY: "50%" }}
          />
        </motion.svg>
      </button>
    </>
  );
};

export default AnimatedIcon;
