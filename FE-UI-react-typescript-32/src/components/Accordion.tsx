import { accordionItems } from "../constants/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "../store/useStore";

const Accordion = () => {
  const { activeAccordion, setActiveAccordion } = useUIStore();

  const toggle = (index: number) =>
    setActiveAccordion(activeAccordion === index ? null : index);
  return (
    <div className="w-96 mx-auto border rounded">
      {accordionItems.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full px-4 py-2 text-left bg-gray-100 border-b hover:bg-gray-200"
          >
            {item.title}
          </button>
          <AnimatePresence>
            {activeAccordion === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-4 bg-white border-b overflow-hidden"
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
