import { motion } from "framer-motion";
import { useCardStore } from "../store/useCardStore";
import type { CardItem } from "../interface";

interface Props {
  item: CardItem;
}

const Card3D = ({ item }: Props) => {
  const { activeCard, setActiveCard } = useCardStore();

  const isActive = activeCard === item.id;

  return (
    <motion.div
      className="relative w-75 h-95 rounded-2xl overflow-hidden cursor-pointer"
      style={{ perspective: 1000 }}
      onMouseEnter={() => setActiveCard(item.id)}
      onMouseLeave={() => setActiveCard(null)}
      animate={{
        rotateY: isActive ? 15 : 0,
        rotateX: isActive ? -10 : 0,
        scale: isActive ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div className="bg-white shadow-xl rounded-2xl h-full transform-gpu p-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover rounded-xl"
        />

        <div className="mt-4">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card3D;
