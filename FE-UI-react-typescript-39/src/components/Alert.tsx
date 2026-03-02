import {
  ALERT_VARIANTS,
  alertMotion,
  ANIMATION_DURATION,
  BUTTON_VARIANTS,
} from "../constants/constants";
import { AnimatePresence, motion } from "framer-motion";
import type { AlertProps } from "../interface";

const Alert = ({
  isOpen,
  variant = "info",
  title,
  description,
  primaryAction,
  secondaryAction,
  onClose,
}: AlertProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={alertMotion}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: ANIMATION_DURATION }}
          className={`w-full rounded-xl border-l-4 p-4 shadow-md ${ALERT_VARIANTS[variant]}`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              {description && (
                <p className="mt-1 text-sm opacity-80">{description}</p>
              )}
            </div>

            {onClose && (
              <button
                onClick={onClose}
                className="text-xl leading-none opacity-60 hover:opacity-100 transition"
              >
                ×
              </button>
            )}
          </div>

          {/* Actions */}
          {(primaryAction || secondaryAction) && (
            <div className="mt-4 flex gap-3">
              {secondaryAction && (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={secondaryAction.onClick}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
                >
                  {secondaryAction.label}
                </motion.button>
              )}

              {primaryAction && (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.03 }}
                  onClick={primaryAction.onClick}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition ${BUTTON_VARIANTS[variant]}`}
                >
                  {primaryAction.label}
                </motion.button>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
