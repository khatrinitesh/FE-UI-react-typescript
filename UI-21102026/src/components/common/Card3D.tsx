import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import type { ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  maxRotate?: number;
}

export const Card3D = ({
  children,
  className = "",
  maxRotate = 12,
}: Card3DProps) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, {
    stiffness: 200,
    damping: 20,
    mass: 0.5,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 200,
    damping: 20,
    mass: 0.5,
  });

  const shadowX = useTransform(
    springRotateY,
    [-maxRotate, maxRotate],
    [20, -20],
  );

  const shadowY = useTransform(
    springRotateX,
    [-maxRotate, maxRotate],
    [-20, 20],
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const card = event.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateYValue =
      ((x - centerX) / centerX) * maxRotate;

    const rotateXValue =
      -((y - centerY) / centerY) * maxRotate;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className="perspective-distant"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
          boxShadow: useTransform(
            [shadowX, shadowY],
            ([x, y]) =>
              `${x}px ${y}px 40px rgba(0,0,0,0.15)`,
          ),
        }}
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          scale: {
            duration: 0.2,
          },
        }}
        className={`relative overflow-hidden ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};