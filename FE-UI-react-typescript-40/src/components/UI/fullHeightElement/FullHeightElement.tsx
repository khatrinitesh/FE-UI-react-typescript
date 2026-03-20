import { motion } from "framer-motion";
import { PANEL_ANIMATION } from "../../../constants/animationData";
import { useUIStore } from "../../../store/useUIStore";

const FullHeightElement = () => {
  const { isOpen, toggle } = useUIStore();
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 bg-black flex justify-between items-center">
        <h1 className="text-lg font-semibold">Full Height Layout</h1>
        <button onClick={toggle} className="px-4 py-2 bg-blue-500 rounded-lg">
          Toggle
        </button>
      </header>

      {/* Full Height Content */}
      <motion.div
        variants={PANEL_ANIMATION}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.4 }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Full Height Section</h2>
          <p className="text-gray-400">
            This section takes full remaining height
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="p-4 bg-black text-center">Footer</footer>
    </div>
  );
};

export default FullHeightElement;
