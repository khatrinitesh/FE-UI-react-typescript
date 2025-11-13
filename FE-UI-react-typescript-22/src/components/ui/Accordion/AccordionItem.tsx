import type { AccordionItemProps } from "../../../interface";
import { useAccordionStore } from "../../../store/accordionStore";

const AccordionItem = ({ id, title, content }: AccordionItemProps) => {
  const { activeId, setActive } = useAccordionStore();

  const isActive = activeId === id;

  const toggleAccordion = () => {
    setActive(isActive ? null : id);
  };

  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span className={`arrow ${isActive ? "open" : ""}`}>&#9662;</span>
      </button>

      <div className={`accordion-content ${isActive ? "open" : ""}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
