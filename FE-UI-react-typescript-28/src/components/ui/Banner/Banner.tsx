import { useBannerStore } from "../../../store/useBannerStore";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const { open, message, hide } = useBannerStore();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 22,
          }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <div className="mx-auto max-w-3xl py-3 px-6 rounded-b-xl shadow-lg bg-blue-600 text-white flex items-center justify-between">
            <span className="font-medium text-sm">{message}</span>

            <motion.button
              onClick={hide}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="ml-4 text-white/90 hover:text-white"
            >
              ✕
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;
