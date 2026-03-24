import { motion } from "framer-motion";
import type { CardData } from "../../../interface";

interface CardProps {
  data: CardData;
}
const Glassmorphism = ({ data }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-6 w-64 shadow-lg cursor-pointer"
    >
      <h2 className="text-xl font-semibold text-white">{data.title}</h2>
      <p className="text-white/80 mt-2">{data.description}</p>
    </motion.div>
  );
};

export default Glassmorphism;
