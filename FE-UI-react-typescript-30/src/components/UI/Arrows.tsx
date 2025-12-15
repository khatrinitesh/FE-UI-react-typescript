import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useCarouselStore } from "../../store/arrows.store";
import { motion } from "framer-motion";

const Arrows = () => {
  const { currentIndex, items, next, prev } = useCarouselStore();
  return (
    <div className="w-full max-w-md mx-auto mt-10 relative border rounded-lg p-4 bg-white shadow-lg">
      <motion.div
        key={items[currentIndex].id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-xl font-bold">{items[currentIndex].title}</h2>
        <p className="mt-2 text-gray-600">{items[currentIndex].description}</p>
      </motion.div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
      >
        <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <FaArrowLeft size={24} />
        </motion.div>
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500"
      >
        <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <FaArrowRight size={24} />
        </motion.div>
      </button>
    </div>
  );
};

export default Arrows;
