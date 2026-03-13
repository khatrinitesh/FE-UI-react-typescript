import { motion, AnimatePresence } from "framer-motion";
import { DROPDOWN_ITEMS4 } from "../../constants/constants";
import type { DropdownItem4 } from "../../interface";
import { useDropdownStore4 } from "../../store/useDropdownStore4";

const Dropdown4Section = () => {
  const { isOpen, toggleDropdown } = useDropdownStore4();

  return (
    <div className="relative w-64">
      <button
        onClick={toggleDropdown}
        className="w-full bg-blue-500 text-white p-3 rounded-lg"
      >
        Select Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute mt-2 w-full bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <div className="grid grid-cols-2">
              {DROPDOWN_ITEMS4.map((item: DropdownItem4) => (
                <button
                  key={item.id}
                  className="
                    flex 
                    items-center 
                    justify-center
                    h-16
                    border
                    hover:bg-gray-100
                    transition
                  "
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown4Section;
