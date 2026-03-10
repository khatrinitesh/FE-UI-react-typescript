import { motion, AnimatePresence } from "framer-motion";
import { useDropdownStore } from "../../store/dropdownStore";
import { DROPDOWN_ITEMS } from "../../constants/constants";

const ClickDropdowns = () => {
  const { open, toggleDropdown } = useDropdownStore();
  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-lg"
      >
        Menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-2 w-44 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {DROPDOWN_ITEMS.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClickDropdowns;
