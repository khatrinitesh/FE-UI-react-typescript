import { motion, AnimatePresence } from "framer-motion";
import { useDropMorphismStore } from "../../store/useDropMorphismStore";
import { DROPDOWN_ITEMS3 } from "../../constants/constants";

const DropmorphismSection = () => {
  const { isOpen, toggleDropdown, closeDropdown } = useDropMorphismStore();
  return (
    <div className="relative flex justify-center mt-20">
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition"
      >
        Dropdown
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute top-14 w-56 rounded-2xl 
            backdrop-blur-xl bg-white/20 border border-white/30 
            shadow-2xl p-2"
          >
            {DROPDOWN_ITEMS3.map((item) => (
              <div
                key={item.id}
                onClick={closeDropdown}
                className="px-4 py-2 rounded-lg cursor-pointer 
                hover:bg-white/30 transition"
              >
                {item.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropmorphismSection;
