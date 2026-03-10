import { motion, AnimatePresence } from "framer-motion";
import { useCoverStore } from "../../store/coverStore";
import { COVER_CONTENT } from "../../constants/constants";

const ContainerCover = () => {
  const { open, toggleCover } = useCoverStore();
  return (
    <div className="flex justify-center items-center">
      <div
        onClick={toggleCover}
        className="relative w-96 h-56 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
      >
        {/* Base Container */}
        <div className="absolute inset-0 bg-blue-600 flex items-center justify-center text-white font-semibold">
          Click to reveal
        </div>

        {/* Animated Cover */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-white flex flex-col items-center justify-center p-6 text-center"
            >
              <h3 className="text-xl font-bold mb-2">{COVER_CONTENT.title}</h3>

              <p className="text-gray-600">{COVER_CONTENT.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContainerCover;
