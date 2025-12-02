import type { PinProps } from "../../interface";
import { motion } from "framer-motion";
import { useUIStore } from "../../store/3dPinStore";
import { PIN_CONFIG } from "../../constants/constants";

const Pin3D = ({ title, image, width = "w-72", height = "h-96" }: PinProps) => {
  const lift = useUIStore((state) => state.liftAmount);
  return (
    <motion.div
      className={`relative bg-white rounded-xl shadow-xl overflow-hidden 
                  ${width} ${height} cursor-pointer transform-gpu`}
      whileHover={{
        y: -lift,
        rotateX: PIN_CONFIG.rotate,
        rotateY: -PIN_CONFIG.rotate,
        boxShadow:
          "0px 25px 40px rgba(0,0,0,0.25), 0px 10px 20px rgba(0,0,0,0.15)",
      }}
      transition={PIN_CONFIG.transition}
    >
      {/* Image */}
      <img src={image} alt={title} className="w-full h-3/4 object-cover" />

      {/* Title */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* Pin Circle (for effect) */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow"></div>
    </motion.div>
  );
};

export default Pin3D;
