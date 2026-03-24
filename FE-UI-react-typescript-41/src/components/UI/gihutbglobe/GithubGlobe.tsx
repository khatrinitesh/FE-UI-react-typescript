import { motion } from "framer-motion";
import { GLOBE_POINTS } from "../../../constants/constants";

const GithubGlobe = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Globe Container */}
      <motion.div
        className="relative w-80 h-80 rounded-full border border-gray-600"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-2xl"></div>

        {/* Points */}
        {GLOBE_POINTS.map((point) => (
          <motion.div
            key={point.id}
            className="absolute w-3 h-3 bg-white rounded-full"
            style={{
              top: `${point.y}%`,
              left: `${point.x}%`,
            }}
            whileHover={{ scale: 1.8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Tooltip */}
            <span className="absolute top-4 left-2 text-xs text-white whitespace-nowrap">
              {point.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GithubGlobe;
