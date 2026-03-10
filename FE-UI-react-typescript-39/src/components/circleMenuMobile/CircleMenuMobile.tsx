import { MENU_ITEMS } from "../../constants/constants";
import { useMenuStore } from "../../store/menuStore";
import { motion } from "framer-motion";

const radius = 100;

const CircleMenuMobile = () => {
  const { open, toggleMenu } = useMenuStore();
  return (
    <div className="fixed bottom-10 right-10 flex items-center justify-center z-999">
      {MENU_ITEMS.map((item, index) => {
        const angle = (index / MENU_ITEMS.length) * (Math.PI * 2);
        const x = open ? Math.cos(angle) * radius : 0;
        const y = open ? Math.sin(angle) * radius : 0;

        return (
          <motion.button
            key={item.id}
            initial={false}
            animate={{ x, y, opacity: open ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl"
          >
            {item.icon}
          </motion.button>
        );
      })}

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="w-14 h-14 rounded-full bg-blue-600 text-white text-xl flex items-center justify-center shadow-xl"
      >
        ☰
      </motion.button>
    </div>
  );
};

export default CircleMenuMobile;
