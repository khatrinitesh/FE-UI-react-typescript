import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useBeamStore } from "../../store/useBeamStore.store";

const BeamBackground = () => {
  const { beams, updateBeams } = useBeamStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        updateBeams(clientWidth, clientHeight);
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [updateBeams]);
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden bg-black"
    >
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute"
          style={{
            left: beam.x,
            top: beam.y,
            width: beam.width,
            height: beam.height,
            backgroundColor: beam.color,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
};

export default BeamBackground;
