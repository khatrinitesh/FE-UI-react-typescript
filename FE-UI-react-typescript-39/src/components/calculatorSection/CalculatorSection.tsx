import { BUTTON_TRANSITION, CALC_BUTTONS } from "../../constants/constants";
import { useCalculatorStore } from "../../store/useCalculatorStore";
import { motion } from "framer-motion";

const CalculatorSection = () => {
  const { display, append, clear, calculate } = useCalculatorStore();

  const handleClick = (value: string) => {
    if (value === "C") return clear();
    if (value === "=") return calculate();

    append(value);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-72">
        {/* Display */}
        <div className="bg-gray-200 text-right p-3 rounded mb-4 text-xl font-semibold">
          {display || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {CALC_BUTTONS.map((btn) => (
            <motion.button
              key={btn.id}
              whileTap={{ scale: 0.9 }}
              transition={BUTTON_TRANSITION}
              onClick={() => handleClick(btn.value)}
              className="bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700"
            >
              {btn.value}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
