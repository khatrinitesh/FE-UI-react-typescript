import { useState } from "react";
import { useFormStore } from "../../store/useFormStore";
import { DROPDOWN_OPTIONS } from "../../constants/constants";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const setSelectedOption = useFormStore((state) => state.setSelectedOption);
  const selectedOption = useFormStore((state) => state.selectedOption);
  return (
    <div className="relative w-60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full border rounded-lg px-4 py-2 bg-white shadow"
      >
        {selectedOption || "Select Option"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full mt-2 bg-white border rounded-lg shadow"
          >
            {DROPDOWN_OPTIONS.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  setOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
