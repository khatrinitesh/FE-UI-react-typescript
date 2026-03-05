import type { ArrowSlide } from "../../interface";
import { motion } from "framer-motion";

type SlideCardProps = {
  slide: ArrowSlide;
};

const SlideCard = ({ slide }: SlideCardProps) => {
  return (
    <motion.div
      className={`w-80 h-48 rounded-xl shadow-lg flex flex-col justify-center items-center text-white ${slide.color}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold">{slide.title}</h3>
      <p className="mt-2">{slide.description}</p>
    </motion.div>
  );
};

export default SlideCard;
