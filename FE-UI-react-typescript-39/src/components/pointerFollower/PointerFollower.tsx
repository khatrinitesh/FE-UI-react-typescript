import { motion } from "framer-motion";
import { useEffect } from "react";
import { usePointerStore } from "../../store/usePointerStore";

const PointerFollower = () => {
  const { pointer, setPointer } = usePointerStore();

  // Track mouse
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPointer({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [setPointer]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white/80 pointer-events-none z-50"
      animate={{
        x: pointer.x - 12,
        y: pointer.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    />
  );
};

export default PointerFollower;
