import { useEffect, useRef } from "react";
import { useBeamsStore } from "../../store/useBeamsStore";
import { motion } from "framer-motion";

const BackgroundBeams = () => {
  const { beams, update } = useBeamsStore();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let last = performance.now();

    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      const w = ref.current?.offsetWidth ?? 0;
      const h = ref.current?.offsetHeight ?? 0;

      update(dt, w, h);
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, [update]);
  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    >
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          animate={{ x: beam.x, y: beam.y }}
          transition={{ ease: "linear", duration: 0 }}
          style={{
            position: "absolute",
            width: beam.width,
            height: beam.height,
            background: beam.color,
            opacity: 0.55,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundBeams;
