import { useRef } from "react";
import { useScrollbarStore } from "../../store/useScrollbarStore";
import {
  SCROLL_CONTAINER_HEIGHT,
  SCROLLBAR_WIDTH,
} from "../../constants/constants";
import { motion } from "framer-motion";

const CustomScrollbar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollProgress, setScrollProgress } = useScrollbarStore();

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const progress = el.scrollTop / (el.scrollHeight - el.clientHeight);

    setScrollProgress(progress);
  };

  return (
    <div className="flex gap-4">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{ height: SCROLL_CONTAINER_HEIGHT }}
        className="w-82 overflow-y-scroll p-4 border rounded-lg"
      >
        {[...Array(30)].map((_, i) => (
          <p key={i} className="mb-4">
            Scroll content item {i + 1}
          </p>
        ))}
      </div>

      <div
        style={{ width: SCROLLBAR_WIDTH, height: SCROLL_CONTAINER_HEIGHT }}
        className="bg-gray-200 rounded-full relative"
      >
        <motion.div
          className="bg-blue-500 rounded-full absolute w-full"
          style={{ height: "60px" }}
          animate={{
            y: scrollProgress * (SCROLL_CONTAINER_HEIGHT - 60),
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />
      </div>
    </div>
  );
};

export default CustomScrollbar;
