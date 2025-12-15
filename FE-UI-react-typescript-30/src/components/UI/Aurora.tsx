import { useAuroraStore } from "../../store/aurora.store";
import { motion } from "framer-motion";

const Aurora = () => {
  const { layers } = useAuroraStore();
  return (
    <div className=" inset-0 -z-10 overflow-hidden bg-black">
      {layers.map((layer) => (
        <motion.div
          key={layer.id}
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{
            background: layer.color,
            filter: `blur(${layer.blur}px)`,
            opacity: layer.opacity,
          }}
          animate={{
            x: ["-50%", "50%", "-50%"], // horizontal movement
            y: ["0%", "20%", "0%"], // vertical movement
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: layer.speed,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Aurora;
