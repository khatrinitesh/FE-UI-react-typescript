import {
  BORDER_ANIMATION,
  IMAGE_BORDER_RADIUS,
} from "../../constants/constants";
import type { BorderImageProps } from "../../interface";
import { useImageStore } from "../../store/useImageStore";
import { motion } from "framer-motion";

const BorderAroundImg = ({ src, alt }: BorderImageProps) => {
  const { isHovered, setHover } = useImageStore();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        animate={{
          borderColor: isHovered ? "#3b82f6" : "#e5e7eb",
          scale: isHovered ? 1.05 : 1,
        }}
        transition={BORDER_ANIMATION}
        style={{ borderRadius: IMAGE_BORDER_RADIUS }}
        className="border-4 p-2 shadow-lg"
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-64 h-64 object-cover"
          style={{ borderRadius: IMAGE_BORDER_RADIUS }}
          animate={{
            scale: isHovered ? 1.03 : 1,
          }}
          transition={BORDER_ANIMATION}
        />
      </motion.div>
    </div>
  );
};

export default BorderAroundImg;
