import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "../../store/useCarousel";
import SlideCard from "./SlideCard";
import { slides } from "../../constants/constants";

const Carousel = () => {
  const { currentIndex, next, prev } = useCarousel();
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="relative w-80 h-48">
        <AnimatePresence mode="wait">
          <SlideCard
            key={slides[currentIndex].id}
            slide={slides[currentIndex]}
          />
        </AnimatePresence>
      </div>

      <div className="flex gap-8 mt-6">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-gray-200"
          onClick={() => prev(slides.length)}
        >
          ←
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-gray-200"
          onClick={() => next(slides.length)}
        >
          →
        </motion.button>
      </div>
    </div>
  );
};

export default Carousel;
