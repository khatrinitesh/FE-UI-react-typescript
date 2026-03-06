import { REVEAL_TRANSITION } from "../../constants/constants";
import type { RevealProps } from "../../interface";
import { useRevealStore } from "../../store/useRevealStore";
import { motion } from "framer-motion";

const CanvasReveal = ({ image, title, description }: RevealProps) => {
  const { isHovered, setHover } = useRevealStore();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="relative w-96 h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer"
      >
        {/* Background Image */}
        <motion.img
          src={image}
          alt={title}
          className="absolute w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={REVEAL_TRANSITION}
        />

        {/* Canvas Reveal Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white text-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={REVEAL_TRANSITION}
        >
          <motion.h3
            className="text-xl font-semibold mb-2"
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={REVEAL_TRANSITION}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-sm"
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={REVEAL_TRANSITION}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CanvasReveal;
