import { CHECKBOX_COLOR, CHECKBOX_SIZE } from "../../constants/constants";
import { useCheckboxStore } from "../../store/useCheckboxStore";
import { motion } from "framer-motion";

const CustomCheckbox = () => {
  const { checked, toggleCheckbox } = useCheckboxStore();
  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={toggleCheckbox}
    >
      <motion.div
        className={`flex items-center justify-center border-2 border-gray-400 rounded-md ${CHECKBOX_COLOR}`}
        style={{
          width: CHECKBOX_SIZE,
          height: CHECKBOX_SIZE,
        }}
        animate={{
          scale: checked ? 1.1 : 1,
          backgroundColor: checked ? "#3b82f6" : "#ffffff",
        }}
        transition={{ duration: 0.3 }}
      >
        {checked && (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </motion.svg>
        )}
      </motion.div>

      <span className="text-lg select-none">Accept Terms</span>
    </div>
  );
};

export default CustomCheckbox;
