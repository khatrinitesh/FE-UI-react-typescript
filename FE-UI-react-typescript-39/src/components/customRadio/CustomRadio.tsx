import { RADIO_OPTIONS, RADIO_SIZE } from "../../constants/constants";
import { useRadioStore } from "../../store/useRadioStore";
import { motion } from "framer-motion";

const CustomRadio = () => {
  const { selected, setSelected } = useRadioStore();
  return (
    <div className="flex flex-col gap-4">
      {RADIO_OPTIONS.map((option) => {
        const isActive = selected === option;

        return (
          <div
            key={option}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setSelected(option)}
          >
            <div
              className="flex items-center justify-center border-2 border-gray-400 rounded-full"
              style={{
                width: RADIO_SIZE,
                height: RADIO_SIZE,
              }}
            >
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="w-3 h-3 bg-blue-500 rounded-full"
                />
              )}
            </div>

            <span className="text-lg">{option}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CustomRadio;
