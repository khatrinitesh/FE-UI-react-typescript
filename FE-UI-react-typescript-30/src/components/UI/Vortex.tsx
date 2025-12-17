import type { VortexItem } from "../../interface/auth";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useVortexStore } from "../../store/useVortexStore";
import { VORTEX_ROTATE_DURATION } from "../../constants/constants";

interface VortexProps {
  items: VortexItem[];
}

const Vortex = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeId, setActiveId } = useVortexStore();
  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".vortex-item");

    gsap.to(elements, {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: VORTEX_ROTATE_DURATION,
      ease: "linear",
    });
  }, [items]);
  return (
    <div ref={containerRef} className="relative w-[400px] h-[400px] mx-auto">
      {items.map((item, index) => {
        const angle = (index / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * VORTEX_RADIUS;
        const y = Math.sin(angle) * VORTEX_RADIUS;

        return (
          <motion.div
            key={item.id}
            className="absolute rounded-full flex items-center justify-center text-white cursor-pointer vortex-item"
            style={{
              width: VORTEX_SIZE,
              height: VORTEX_SIZE,
              backgroundColor: item.color || "#6366f1",
              top: "50%",
              left: "50%",
              x,
              y,
            }}
            whileHover={{ scale: 1.3 }}
            onHoverStart={() => setActiveId(item.id)}
            onHoverEnd={() => setActiveId(null)}
          >
            {item.label}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Vortex;
