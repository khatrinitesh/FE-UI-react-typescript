import { useState } from "react";
import {
  ANIMATION_DURATION,
  contentVariants,
  iconVariants,
} from "../constants/constants";
import { motion, AnimatePresence } from "framer-motion";
import type { AccordionProps } from "../interface";

const Accordion = ({ title, children, defaultOpen = true }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="w-full border-b border-gray-200">
      {/* Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`cursor-pointer flex w-full items-center justify-between rounded-full p-4 text-left ${isOpen ? "bg-red-500 text-white" : "bg-transparent"}`}
      >
        <span className="text-lg font-medium">{title}</span>

        {/* Animated Icon */}
        <motion.div
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: ANIMATION_DURATION }}
          className={`relative h-5 w-5`}
        >
          {/* Horizontal line */}
          <span className="absolute top-1/2 left-0 h-0.5 w-5 -translate-y-1/2 bg-black" />

          {/* Vertical line (rotates to disappear into minus) */}
          <span
            className={`absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </motion.div>
      </button>

      {/* Animated Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            transition={{ duration: ANIMATION_DURATION }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
