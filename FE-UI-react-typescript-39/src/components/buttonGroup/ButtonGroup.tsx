import { BUTTON_ANIMATION, BUTTON_ITEMS } from "../../constants/constants";
import { useButtonStore } from "../../store/useButtonStore";
import { motion } from "framer-motion";

const ButtonGroup = () => {
  const { activeId, setActive } = useButtonStore();
  return (
    <div className="flex justify-center mt-10">
      <div className="relative flex bg-gray-200 rounded-full p-1">
        {BUTTON_ITEMS.map((item) => {
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className="cursor-pointer relative px-6 py-2 z-10 font-medium text-sm"
            >
              {isActive && (
                <motion.div
                  layoutId="activeButton"
                  transition={BUTTON_ANIMATION}
                  className="cursor-pointer absolute inset-0 bg-blue-500 -z-1 text-white! rounded-full"
                />
              )}

              <span className={isActive ? "text-white! " : "text-gray-700"}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonGroup;
