import type { AccordionProps } from "../../interface";
import useAccordionStore from "../../logicStore/zustand/useAccordionStore/useAccordionStore";

const AccordionSection = ({ items }: AccordionProps) => {
  const { openItemId, toggleItem } = useAccordionStore();

  return (
    <div className="accordion">
      {items.map(({ id, title, content }) => {
        const isOpen = openItemId === id;

        return (
          <div key={id} className="accordion-item">
            <div className="accordion-header" onClick={() => toggleItem(id)}>
              <span>{title}</span>
              <span className="accordion-icon">{isOpen ? '-' : '+'></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionSection;
