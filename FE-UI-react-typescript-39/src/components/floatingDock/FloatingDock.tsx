import { motion } from "framer-motion";
import { DOCK_ITEMS } from "../../constants/constants";
import { useDockStore } from "../../store/useDockStore";

const FloatingDock = () => {
  const { activeId, setActive } = useDockStore();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-4 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20">
        {DOCK_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            onMouseEnter={() => setActive(item.id)}
            onMouseLeave={() => setActive(null)}
            className="relative flex flex-col items-center cursor-pointer"
            animate={{
              scale: activeId === item.id ? 1.4 : 1,
              y: activeId === item.id ? -10 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {/* Icon */}
            <div className="text-2xl">{item.icon}</div>

            {/* Tooltip */}
            {activeId === item.id && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -5 }}
                exit={{ opacity: 0 }}
                className="absolute -top-8 text-xs bg-black text-white px-2 py-1 rounded-md whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FloatingDock;
