import { AnimatePresence, motion } from "framer-motion";
import { ELEMENTS } from "../../constants/constants";
import { useHiddenStore } from "../../store/useHiddenStore";

const HiddenElement = () => {
  const { revealed, reveal } = useHiddenStore();

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      {ELEMENTS.map((item) => {
        const visible = revealed.includes(item.id);

        return (
          <div
            key={item.id}
            className="border border-zinc-800 rounded-xl p-4 bg-zinc-900 text-white"
          >
            <button
              onClick={() => reveal(item.id)}
              className="mb-3 px-4 py-2 bg-indigo-600 rounded-lg"
            >
              Find Hidden
            </button>

            <AnimatePresence>
              {visible && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="p-4 bg-zinc-800 rounded-lg"
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default HiddenElement;
