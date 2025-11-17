import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ModalProps } from "../../interface";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <button className="absolute inset-0 bg-black/40" onClick={onClose} />

          {/* modal box */}
          <motion.div
            className={`${className} relative z-10
              w-[90%] max-w-3xl
              max-h-[90vh]
              bg-[#f8f6fb]
              rounded-[32px]
              shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]
              flex flex-col overflow-hidden`}
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className={`${className} inline-flex items-center justify-center
                  w-8 h-8 rounded-full bg-[#f3f4f6] absolute top-4 right-4 cursor-pointer transition-colors`}
              aria-label="Close"
            >
              {/* X icon */}
              <X />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
