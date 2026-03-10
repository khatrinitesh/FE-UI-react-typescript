import { motion, AnimatePresence } from "framer-motion";
import { useListStore } from "../../store/listStore";

const ClosableListItems = () => {
  const { items, removeItem } = useListStore();
  return (
    <div className="max-w-md mx-auto space-y-3">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <span>{item.label}</span>

            <button
              onClick={() => removeItem(item.id)}
              className="text-gray-400 hover:text-red-500 cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClosableListItems;
