import { motion, AnimatePresence } from "framer-motion";
import { useSelectStore } from "../../store/useSelectStore";
import { SELECT_OPTIONS, SELECT_PLACEHOLDER } from "../../constants/constants";

const CustomSelect = () => {
  const { selected, isOpen, toggleSelect, selectOption } = useSelectStore();
  return (
    <div className="relative w-64">
      <div
        onClick={toggleSelect}
        className="border rounded-lg px-4 py-3 bg-white cursor-pointer flex justify-between items-center"
      >
        <span>{selected || SELECT_PLACEHOLDER}</span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg overflow-hidden"
          >
            {SELECT_OPTIONS.map((option) => (
              <motion.div
                key={option}
                whileHover={{ backgroundColor: "#f3f4f6" }}
                onClick={() => selectOption(option)}
                className="px-4 py-3 cursor-pointer"
              >
                {option}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
