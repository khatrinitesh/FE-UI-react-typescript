import { motion, AnimatePresence } from "framer-motion";
import type { CalloutProps } from "../../interface";
import { useCalloutStore } from "../../store/useCalloutStore ";
import { CALLOUT_STYLES, CALLOUT_TRANSITION } from "../../constants/constants";

const CalloutSection = ({ message, type = "info" }: CalloutProps) => {
  const { visible, hide } = useCalloutStore();

  return (
    <div className="flex justify-center mt-10">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={CALLOUT_TRANSITION}
            className={`flex items-center justify-between border-l-4 p-4 rounded-md shadow-md w-[420px] ${CALLOUT_STYLES[type]}`}
          >
            <span className="font-medium">{message}</span>

            <button onClick={hide} className="ml-4 font-bold">
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalloutSection;
