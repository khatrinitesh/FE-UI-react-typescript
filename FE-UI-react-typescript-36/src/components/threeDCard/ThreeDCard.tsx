import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { CARD_CONFIG, SPRING_CONFIG } from "../../constants/constants";
import { useCardStore } from "../../store/useCardStore";

interface ThreeDCardProps {
  id: string;
  title: string;
  description: string;
}

const ThreeDCard = ({ id, title, description }: ThreeDCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { hoveredId, setHovered } = useCardStore();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(
    y,
    [-100, 100],
    [CARD_CONFIG.ROTATION_RANGE, -CARD_CONFIG.ROTATION_RANGE],
  );

  const rotateY = useTransform(
    x,
    [-100, 100],
    [-CARD_CONFIG.ROTATION_RANGE, CARD_CONFIG.ROTATION_RANGE],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(null);
  };

  return (
    <>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(id)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: CARD_CONFIG.PERSPECTIVE,
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            scale: hoveredId === id ? CARD_CONFIG.SCALE : 1,
          }}
          transition={SPRING_CONFIG}
          className="card"
        >
          <div
            style={{
              padding: 30,
              borderRadius: 20,
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              transform: "translateZ(50px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ThreeDCard;
