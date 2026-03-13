import { motion, AnimatePresence } from "framer-motion";
import { DROPDOWN_ITEMS2 } from "../../constants/constants";
import { useDropdownStore } from "../../store/useDropdownStore";

const DropdownMenu = () => {
  const { isOpen } = useDropdownStore();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="absolute right-0 mt-3 w-48 rounded-xl bg-white shadow-lg border"
        >
          <ul className="py-2">
            {DROPDOWN_ITEMS2.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
