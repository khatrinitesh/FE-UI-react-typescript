import { FaMinus, FaPlus } from "react-icons/fa";
import { accordionData } from "../../constants/constants";
import { useAccordionStore } from "../../store/useAccordionStore/useAccordionStore";
import "./accordion-style.css";

const AccordionComponent = () => {
  const { openItemId, toggleItem } = useAccordionStore();
  return (
    <div className="accordion-container">
      {accordionData.map((item) => {
        const isOpen = item.id === openItemId;

        return (
          <div key={item.id} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.title}</span>
              <span className="icon">{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </button>

            <div className={`accordion-body ${isOpen ? "open" : ""}`}>
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccordionComponent;
