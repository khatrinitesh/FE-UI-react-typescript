import { INPUT_PLACEHOLDER } from "../../constants/constants";
import { useInputStore } from "../../store/inputStore";
import { motion, AnimatePresence } from "framer-motion";

const ClearInputField = () => {
  const { value, setValue, clearValue } = useInputStore();
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={value}
        placeholder={INPUT_PLACEHOLDER}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <AnimatePresence>
        {value && (
          <motion.button
            key="clear"
            onClick={clearValue}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
          >
            ✕
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClearInputField;
