import { useCursorStore } from "../../store/useCursorStore";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { CURSOR_SIZE } from "../../constants/constants";

const CustomCursor = () => {
  const { x, y, setPosition } = useCursorStore();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [setPosition]);
  return (
    <motion.div
      className="fixed pointer-events-none z-50 bg-blue-500 rounded-full"
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
      }}
      animate={{
        x: x - CURSOR_SIZE / 2,
        y: y - CURSOR_SIZE / 2,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    />
  );
};

export default CustomCursor;
