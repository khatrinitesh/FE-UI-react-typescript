import { motion, AnimatePresence } from "framer-motion";
import { useBannerStore } from "../../store/useBannerStore";
import { BANNER_MESSAGES } from "../../constants/constants";

const BannerSection = () => {
  const { currentIndex, next, prev } = useBannerStore();
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={BANNER_MESSAGES[currentIndex].id}
          className={`rounded-lg p-6 text-white ${BANNER_MESSAGES[currentIndex].color} shadow-lg`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold">
            {BANNER_MESSAGES[currentIndex].title}
          </h2>
          <p className="mt-2">{BANNER_MESSAGES[currentIndex].subtitle}</p>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => prev(BANNER_MESSAGES.length)}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        >
          Prev
        </button>
        <button
          onClick={() => next(BANNER_MESSAGES.length)}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
