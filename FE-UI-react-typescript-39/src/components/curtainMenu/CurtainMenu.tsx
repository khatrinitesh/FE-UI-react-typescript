import { motion, AnimatePresence } from "framer-motion";
import { CURTAIN_MENU_ITEMS } from "../../constants/constants";
import { useMenuStore } from "../../store/useMenuStore";

const CurtainMenu = () => {
  const { isOpen, toggleMenu, closeMenu } = useMenuStore();
  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 bg-black text-white px-4 py-2 rounded-lg"
      >
        Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-8 text-3xl z-40"
          >
            {CURTAIN_MENU_ITEMS.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
                onClick={closeMenu}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CurtainMenu;
