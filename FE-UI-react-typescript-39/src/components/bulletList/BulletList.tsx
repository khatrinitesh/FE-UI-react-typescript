import { BULLET_ANIMATION, BULLET_ITEMS } from "../../constants/constants";
import { useBulletStore } from "../../store/useBulletStore";
import { motion } from "framer-motion";

const BulletList = () => {
  const { activeId, setActive } = useBulletStore();
  return (
    <ul className="max-w-md mx-auto mt-10 space-y-4">
      {BULLET_ITEMS.map((item) => {
        const isActive = activeId === item.id;

        return (
          <motion.li
            key={item.id}
            onHoverStart={() => setActive(item.id)}
            className="flex items-center gap-3 cursor-pointer"
            animate={{ x: isActive ? 10 : 0 }}
            transition={BULLET_ANIMATION}
          >
            <motion.span
              animate={{
                scale: isActive ? 1.5 : 1,
                backgroundColor: isActive ? "#3b82f6" : "#9ca3af",
              }}
              transition={BULLET_ANIMATION}
              className="w-3 h-3 rounded-full"
            />

            <span className="text-gray-700 font-medium">{item.label}</span>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default BulletList;
