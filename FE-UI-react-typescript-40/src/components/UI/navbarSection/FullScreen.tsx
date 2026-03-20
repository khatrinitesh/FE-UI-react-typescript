import { AnimatePresence, motion } from "framer-motion";
import {
  ITEM_ANIMATION,
  MENU_ANIMATION,
} from "../../../constants/animationData";
import { NAV_ITEMS } from "../../../constants/constants";
import { useNavStore } from "./../../../store/useNavStore";

const FullScreen = () => {
  const { isOpen, close } = useNavStore();
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40"
            variants={MENU_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Close Button */}
            <button onClick={close} className="absolute top-6 right-6 text-2xl">
              ✕
            </button>

            {/* Menu Items */}
            <motion.ul className="space-y-6 text-3xl font-semibold text-center">
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item}
                  variants={ITEM_ANIMATION}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer"
                  onClick={close}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullScreen;
