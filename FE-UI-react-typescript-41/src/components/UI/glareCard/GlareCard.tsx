import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { CARD_CONFIG } from "../../../constants/constants";
import type { GlareCardProps } from "../../../interface";

const GlareCard = ({ title, description, image }: GlareCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(
    y,
    [-100, 100],
    [CARD_CONFIG.MAX_ROTATE, -CARD_CONFIG.MAX_ROTATE],
  );
  const rotateY = useTransform(
    x,
    [-100, 100],
    [-CARD_CONFIG.MAX_ROTATE, CARD_CONFIG.MAX_ROTATE],
  );

  const glareX = useTransform(x, [-100, 100], ["0%", "100%"]);
  const glareY = useTransform(y, [-100, 100], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set(posX - centerX);
    y.set(posY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      transition={{ duration: CARD_CONFIG.TRANSITION }}
      className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-xl bg-white"
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm opacity-80">{description}</p>
      </div>

      {/* Glare */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4), transparent)`,
        }}
      />
    </motion.div>
  );
};

export default GlareCard;
