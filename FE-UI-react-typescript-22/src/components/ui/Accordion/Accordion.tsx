import { ACCORDION_ITEMS } from "../../../constants/constants";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";
import { useEffect } from "react";
import { useAccordionStore } from "../../../store/accordionStore";

const Accordion = () => {
  const { setActive } = useAccordionStore();

  // ✅ Open the first item by default when the component loads
  useEffect(() => {
    if (ACCORDION_ITEMS.length > 0) {
      setActive(ACCORDION_ITEMS[0].id);
    }
  }, [ACCORDION_ITEMS, setActive]);

  return (
    <div className="accordion-container">
      {ACCORDION_ITEMS.map((item) => (
        <AccordionItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
