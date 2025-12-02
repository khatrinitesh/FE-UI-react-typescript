import type { AccordionProps } from "../../interface";
import { motion } from "framer-motion";
import { useAccordionStore } from "../../store/useAccordionStore";
import { ACCORDION_CONFIG } from "../../constants/constants";

const Accordion = ({ items }: AccordionProps) => {
  const { openId, toggleAccordion } = useAccordionStore();
  return (
    <div className="space-y-4 w-full max-w-xl mx-auto">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            {/* Header */}
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full text-left p-4 bg-gray-100 cursor-pointer font-semibold flex justify-between items-center"
            >
              <span>{item.title}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={ACCORDION_CONFIG.transition}
              >
                ▼
              </motion.span>
            </button>

            {/* Content */}
            <motion.div
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={ACCORDION_CONFIG.transition}
              className="overflow-hidden"
            >
              <div className="p-4 text-gray-700">{item.content}</div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
