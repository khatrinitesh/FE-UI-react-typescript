import {
  CARD_ANIMATION,
  CARD_VARIANTS,
  IMAGE_VARIANTS,
} from "../../constants/constants";
import type { CardHoverEffectProps } from "../../interface";
import { useHoverStore } from "../../store/useHoverStore";
import { motion } from "framer-motion";

const CardHoverEffect = ({
  image,
  title,
  description,
}: CardHoverEffectProps) => {
  const { isHovered, setHover } = useHoverStore();
  return (
    <motion.div
      className="relative w-[320px] rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer"
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      variants={CARD_VARIANTS}
      transition={CARD_ANIMATION}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {/* Image */}
      <div className="overflow-hidden h-[200px]">
        <motion.img
          src={image}
          variants={IMAGE_VARIANTS}
          transition={CARD_ANIMATION}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <motion.h3
          className="text-lg font-semibold"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={CARD_ANIMATION}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-600 text-sm mt-2"
          initial={{ y: 10, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0,
          }}
          transition={CARD_ANIMATION}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CardHoverEffect;
