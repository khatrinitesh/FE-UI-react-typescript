import { motion, AnimatePresence } from "framer-motion";
import { useSidePanelStore } from "../../store/sidepanelStore";
import { PANEL_ITEMS } from "../../constants/constants";

const CollapsedSidepanel = () => {
  const { open, togglePanel, closePanel } = useSidePanelStore();
  return (
    <>
      <button
        onClick={togglePanel}
        className="fixed top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Panel
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={closePanel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-4">Side Panel</h2>

              <ul className="space-y-3">
                {PANEL_ITEMS.map((item) => (
                  <li
                    key={item.id}
                    className="p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CollapsedSidepanel;
