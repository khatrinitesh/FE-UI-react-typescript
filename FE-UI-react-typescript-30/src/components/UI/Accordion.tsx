import { clsx } from "clsx";
import { ACCORDION_ITEMS } from "../../constants/constants";
import { useAccordionStore } from "../../store/accordion.store";

const Accordion = () => {
  const { openId, toggle } = useAccordionStore(); // single openId

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {ACCORDION_ITEMS.map((item) => {
        const isOpen = openId === item.id; // check single active item

        return (
          <div
            key={item.id}
            className={clsx(
              "border cursor-pointer rounded-lg overflow-hidden transition-colors",
              isOpen ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className={clsx(
                "w-full flex justify-between items-center p-4 transition",
                isOpen
                  ? "bg-blue-100 text-blue-800 font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              )}
            >
              <span>{item.title}</span>
              <span className="text-xl">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && <div className="p-4 text-gray-700">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
