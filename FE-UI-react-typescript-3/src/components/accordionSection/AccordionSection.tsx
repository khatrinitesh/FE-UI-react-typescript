import { FaMinus, FaPlus } from "react-icons/fa";
import { accordionItems } from "../../constants/constants";
import useAccordionStore from "../../logicStore/zustand/useAccordionStore/useAccordionStore";

const AccordionSection = () => {
  const { openItem, toggleItem } = useAccordionStore();

  return (
    <div className="w-full max-w-md mx-auto mt-5">
      {accordionItems.map((item) => {
        const isOpen = openItem === item.id;

        return (
          <div key={item.id} className="border-b border-gray-300">
            <button
              className={`flex justify-between items-center w-full py-4 px-2 text-left font-medium text-[#171A1F] ${
                isOpen ? "text-[#FFD51A]" : ""
              }`}
              onClick={() => toggleItem(item.id)}
            >
              <span>{item.title}</span>
              <span className="text-sm">
                {isOpen ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionSection;
