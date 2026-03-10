import { DOTS } from "../../constants/constants";
import { useDotsStore } from "../../store/dotsStore";
import { motion } from "framer-motion";

const CircleDots = () => {
  const { active, setActive } = useDotsStore();
  return (
    <div className="flex items-center justify-center gap-4">
      {DOTS.map((dot, index) => {
        const isActive = active === index;

        return (
          <motion.button
            key={dot.id}
            onClick={() => setActive(index)}
            animate={{
              scale: isActive ? 1.4 : 1,
              opacity: isActive ? 1 : 0.5,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-4 h-4 rounded-full transition-colors duration-300 
            ${isActive ? "bg-blue-600" : "bg-gray-400"}`}
          />
        );
      })}
    </div>
  );
};

export default CircleDots;
