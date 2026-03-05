import { motion } from "framer-motion";
import { cards } from "../../constants/constants";
import type { AspectRatioCard } from "../../interface";

const AspectRatio = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </>
  );
};

export default AspectRatio;

type CardProps = {
  card: AspectRatioCard;
};

const Card = ({ card }: CardProps) => {
  return (
    <motion.div
      className={`relative w-full ${card.color} rounded-lg shadow-lg overflow-hidden`}
      style={{ aspectRatio: "16/9" }} // Maintains 16:9 aspect ratio
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
        <h3 className="text-xl font-bold">{card.title}</h3>
        <p className="mt-2">{card.description}</p>
      </div>
    </motion.div>
  );
};
