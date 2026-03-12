import { motion, AnimatePresence } from "framer-motion";
import { useRightClickStore } from "../../store/useRightClickStore";
import { RIGHT_CLICK_MESSAGE } from "../../constants/constants";
import { useEffect } from "react";

const DisableRightClick = () => {
  const { showMessage, setShowMessage } = useRightClickStore();

  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      event.preventDefault();
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    };

    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, [setShowMessage]);
  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Right Click Disabled Page</h1>

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-10 bg-red-500 px-6 py-3 rounded-xl shadow-lg"
          >
            {RIGHT_CLICK_MESSAGE}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DisableRightClick;
