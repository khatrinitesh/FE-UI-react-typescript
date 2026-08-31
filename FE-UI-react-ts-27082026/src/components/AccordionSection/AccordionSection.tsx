import { useState } from "react";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div className={`accordion-item ${isOpen ? "active" : ""}`} key={`${item.title}-${index}`}>
            <button className="accordion-header" type="button" onClick={() => handleToggle(index)} aria-expanded={isOpen}>
              <span className="accordion-title">{item.title}</span>
              <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
            </button>

            <div className="accordion-content">
              <div className="accordion-content-inner">
                <p className="accordion-description">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
