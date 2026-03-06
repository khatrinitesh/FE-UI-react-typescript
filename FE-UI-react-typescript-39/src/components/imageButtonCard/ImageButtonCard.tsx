import { IMAGE_BUTTON_TRANSITION } from "../../constants/constants";
import type { ImageButtonCardProps } from "../../interface";
import { useImageButtonStore } from "../../store/useImageButtonStore";
import { motion } from "framer-motion";

const ImageButtonCard = ({
  image,
  title,
  buttonText,
}: ImageButtonCardProps) => {
  const { hovered, setHovered } = useImageButtonStore();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="relative w-80 overflow-hidden rounded-xl shadow-lg cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Image */}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={IMAGE_BUTTON_TRANSITION}
        />

        {/* Title */}
        <div className="absolute top-3 left-3 text-white font-semibold bg-black/40 px-3 py-1 rounded">
          {title}
        </div>

        {/* Sliding Button */}
        <motion.div
          initial={{ y: 60 }}
          animate={{ y: hovered ? 0 : 60 }}
          transition={IMAGE_BUTTON_TRANSITION}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <button className="bg-white text-gray-800 px-5 py-2 rounded-lg shadow-md font-medium hover:bg-gray-100">
            {buttonText}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageButtonCard;
