import { motion, AnimatePresence } from "framer-motion";
import { useCapsStore } from "../../store/useCapsStore";
import { CAPS_WARNING_TEXT } from "../../constants/constants";

const CapsLockDetector = () => {
  const { isCapsOn, setCapsState } = useCapsStore();

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const caps = e.getModifierState("CapsLock");
    setCapsState(caps);
  };

  return (
    <div className="flex flex-col gap-3 w-72">
      <input
        type="password"
        placeholder="Enter password"
        onKeyUp={handleKeyEvent}
        onKeyDown={handleKeyEvent}
        className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <AnimatePresence>
        {isCapsOn && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="text-sm text-red-500 font-medium"
          >
            {CAPS_WARNING_TEXT}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CapsLockDetector;
