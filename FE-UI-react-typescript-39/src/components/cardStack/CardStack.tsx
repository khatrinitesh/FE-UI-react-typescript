import { STACK_TRANSITION, STACK_VARIANTS } from "../../constants/constants";
import type { CardStackProps } from "../../interface";
import { useCardStackStore } from "../../store/cardStackStore";
import { motion } from "framer-motion";

const CardStack = ({ cards }: CardStackProps) => {
  const { hovered, setHovered } = useCardStackStore();

  return (
    <div
      className="relative w-[300px] h-[360px] flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-[260px] h-[340px] rounded-xl overflow-hidden shadow-xl bg-white cursor-pointer"
          custom={index}
          variants={STACK_VARIANTS}
          initial="rest"
          animate={hovered ? "hover" : "rest"}
          transition={STACK_TRANSITION}
        >
          <img
            src={card.image}
            className="w-full h-[75%] object-cover"
            alt={card.title}
          />

          <div className="p-4">
            <h3 className="font-semibold text-gray-800">{card.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardStack;
