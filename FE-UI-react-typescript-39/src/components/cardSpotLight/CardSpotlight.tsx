import { useRef } from "react";
import {
  CARD_HOVER_VARIANT,
  SPOTLIGHT_TRANSITION,
} from "../../constants/constants";
import { useSpotlightStore } from "../../store/spotlightStore";
import { motion } from "framer-motion";
import type { CardSpotlightProps } from "../../interface";

const CardSpotlight = ({ image, title, description }: CardSpotlightProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { x, y, setPosition } = useSpotlightStore();

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    setPosition(posX, posY);
  };
  return (
    <motion.div
      ref={cardRef}
      className="relative w-[340px] rounded-xl overflow-hidden bg-gray-900 text-white shadow-xl cursor-pointer"
      initial="rest"
      whileHover="hover"
      variants={CARD_HOVER_VARIANT}
      transition={SPOTLIGHT_TRANSITION}
      onMouseMove={handleMouseMove}
    >
      {/* Image */}
      <img src={image} className="w-full h-[200px] object-cover" />

      {/* Spotlight overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25), transparent 40%)`,
        }}
        transition={SPOTLIGHT_TRANSITION}
      />

      {/* Content */}
      <div className="p-5 relative z-10">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-gray-300 text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default CardSpotlight;
