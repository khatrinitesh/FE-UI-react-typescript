import type { VerticalButtonGrpProps } from "../../interface";
import { useButtonGroupStore } from "../../store/verticalButtonGroupStore";
import { VERTICAL_BTN_GRP_CONSTANTS } from "./verticalBtnGrpConstants";

const VerticalBtnGrp = () => {
  const { activeValue, setActiveValue } = useButtonGroupStore();
  return (
    <div className="flex flex-col w-48 border rounded-md overflow-hidden">
      {VERTICAL_BTN_GRP_CONSTANTS.map(
        ({ id, label, value }: VerticalButtonGrpProps) => {
          const isActive = activeValue === value;

          return (
            <button
              key={id}
              onClick={() => setActiveValue(value)}
              className={`px-4 py-3 text-left border-b last:border-b-0 transition
              ${
                isActive
                  ? "bg-blue-600 text-white font-semibold"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
              aria-pressed={isActive}
              role="radio"
            >
              {label}
            </button>
          );
        }
      )}
    </div>
  );
};

export default VerticalBtnGrp;
