import { AnimatePresence, motion } from "framer-motion";
import { useId, useState } from "react";

export type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const accordionId = useId();

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const contentId = `${accordionId}-${index}`;

        return (
          <div className="accordion-item" key={item.title}>
            <button className="accordion-trigger" type="button" aria-expanded={isOpen} aria-controls={contentId} onClick={() => setOpenIndex(isOpen ? null : index)}>
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div className="accordion-panel" id={contentId} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                  <p className="accordion-content">{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
