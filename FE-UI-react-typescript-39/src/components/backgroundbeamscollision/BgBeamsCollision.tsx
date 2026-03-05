import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useBeamStore } from "../../store/useBeamStore";

type BeamType = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
};

const BgBeamsCollision = () => {
  const { beams, update } = useBeamStore();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      const height = containerRef.current?.clientHeight || window.innerHeight;
      update(width, height);
      requestAnimationFrame(animate);
    };
    animate();
  }, [update]);
  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0">
      {beams.map((beam) => (
        <Beam key={beam.id} beam={beam} />
      ))}
    </div>
  );
};

export default BgBeamsCollision;

type BeamProps = {
  beam: BeamType;
};

const Beam = ({ beam }: BeamProps) => {
  return (
    <motion.div
      className={`absolute ${beam.color}`}
      style={{
        width: beam.size,
        height: beam.size / 5,
        top: beam.y,
        left: beam.x,
      }}
      animate={{ x: beam.x, y: beam.y }}
      transition={{ ease: "linear", duration: 0.016 }}
    />
  );
};
