import { COLLAPSE_ITEMS } from "../../constants/constants";
import { useCollapseStore } from "../../store/collapsibleStore";
import { motion, AnimatePresence } from "framer-motion";

const Collapsible = () => {
  const { activeId, toggleItem } = useCollapseStore();
  return (
    <div className="max-w-lg mx-auto space-y-3">
      {COLLAPSE_ITEMS.map((item) => {
        const open = activeId === item.id;

        return (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center p-4 font-medium"
            >
              {item.title}

              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="px-4 pb-4 text-gray-600"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Collapsible;
