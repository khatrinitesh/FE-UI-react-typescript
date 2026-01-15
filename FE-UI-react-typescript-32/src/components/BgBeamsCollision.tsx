import { useEffect } from "react";
import { useBeamsStore } from "../store/useBeamsStore";
import { motion } from "framer-motion";

const BgBeamsCollision = () => {
  const { beams, updateBeams } = useBeamsStore();

  useEffect(() => {
    const interval = setInterval(updateBeams, 16); // ~60fps
    return () => clearInterval(interval);
  }, [updateBeams]);
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {beams.map((beam) => (
        <motion.div
          key={beam.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 opacity-70"
          style={{
            width: beam.size * 10,
            height: beam.size * 10,
            x: beam.x,
            y: beam.y,
          }}
          animate={{ x: beam.x, y: beam.y }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      ))}
    </div>
  );
};

export default BgBeamsCollision;
