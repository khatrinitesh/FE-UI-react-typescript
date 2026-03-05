import { motion } from "framer-motion";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 text-white max-w-xl text-center shadow-xl"
    >
      <h1 className="text-3xl font-bold mb-4">Blur Background UI</h1>

      <p className="text-gray-200">
        Beautiful frosted glass UI with animated background transitions.
      </p>
    </motion.div>
  );
};

export default HeroCard;
