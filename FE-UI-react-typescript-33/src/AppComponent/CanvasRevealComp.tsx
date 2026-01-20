import { REVEAL_RADIUS } from "../constants/constants";
import { useRevealStore } from "../store/useRevealStore/useRevealStore";
import { motion } from "framer-motion";

const CanvasRevealComp = () => {
  const { x, y, isActive, reveal, reset } = useRevealStore();

  return (
    <div
      onClick={(e) => reveal(e.clientX, e.clientY)}
      style={{
        position: "relative",
        height: "100vh",
        background: "#111",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Hidden content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #4caf50, #2196f3)",
        }}
      />

      {/* Reveal mask */}
      <motion.div
        animate={{
          clipPath: isActive
            ? `circle(${REVEAL_RADIUS.FINAL}px at ${x}px ${y}px)`
            : `circle(${REVEAL_RADIUS.INITIAL}px at ${x}px ${y}px)`,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background: "#111",
        }}
        onAnimationComplete={reset}
      />

      {/* UI Text */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
          top: "45%",
          fontSize: 24,
        }}
      >
        Click anywhere to reveal
      </div>
    </div>
  );
};

export default CanvasRevealComp;
