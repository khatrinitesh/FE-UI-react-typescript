import { motion, useMotionValue, useTransform } from "framer-motion";
import type { CardProps } from "../../interface";
import { useUIStore } from "../../store/3dCardStore";

const Card3D = ({ title, image, description }: CardProps) => {
  const tiltStrength = useUIStore((state) => state.tiltStrength);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [tiltStrength, -tiltStrength]);
  const rotateY = useTransform(x, [-50, 50], [-tiltStrength, tiltStrength]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      className="bg-white shadow-xl rounded-xl p-5 cursor-pointer 
                 w-80 h-96 flex flex-col items-center justify-between
                 transform-gpu"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        {description && (
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default Card3D;
