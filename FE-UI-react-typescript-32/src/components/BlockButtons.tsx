import { variantClasses } from "../constants/constants";
import { useBlockButtonStore } from "../store/useBlockButtonStore";

const BlockButtons = () => {
  const { buttons, activeId, setActive } = useBlockButtonStore();
  return (
    <div className="max-w-md mx-auto space-y-3">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setActive(btn.id)}
          className={`
            w-full py-3 rounded-lg font-semibold transition
            ${variantClasses[btn.variant]}
            ${activeId === btn.id ? "ring-2 ring-offset-2 ring-blue-400" : ""}
          `}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default BlockButtons;
