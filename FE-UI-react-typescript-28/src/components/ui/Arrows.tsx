import { useArrowStore } from "../../store/useArrowsState";
import { motion } from "framer-motion";

interface Props {
  direction: "up" | "down" | "left" | "right";
}

const Arrows = ({ direction }: Props) => {
  const { active, setActive } = useArrowStore();

  const offsets = {
    up: { x: 0, y: -6 },
    down: { x: 0, y: 6 },
    left: { x: -6, y: 0 },
    right: { x: 6, y: 0 },
  };

  const icons = {
    up: "▲",
    down: "▼",
    left: "◀",
    right: "▶",
  };

  return (
    <motion.button
      onClick={() => setActive(direction)}
      className="p-2 text-2xl text-gray-700 hover:text-black"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={active === direction ? offsets[direction] : { x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        {icons[direction]}
      </motion.div>
    </motion.button>
  );
};

export default Arrows;
