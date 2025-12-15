import { BULLETS } from "../../constants/constants";
import { useBulletStore } from "../../store/useBullet.store";
import { motion } from "framer-motion";

const BulletColor = () => {
  const { selectedId, setSelectedId } = useBulletStore();
  return (
    <ul className="flex flex-col gap-4 p-4">
      {BULLETS.map((bullet) => (
        <motion.li
          key={bullet.id}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setSelectedId(bullet.id)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={`w-4 h-4 rounded-full ${bullet.color} ${
              selectedId === bullet.id
                ? "ring-2 ring-offset-1 ring-gray-400"
                : ""
            }`}
            layoutId="bullet-selected"
          />
          <span
            className={`${selectedId === bullet.id ? "font-semibold" : ""}`}
          >
            {bullet.label}
          </span>
        </motion.li>
      ))}
    </ul>
  );
};

export default BulletColor;
