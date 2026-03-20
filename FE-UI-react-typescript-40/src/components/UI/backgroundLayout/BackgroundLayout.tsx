import { motion } from "framer-motion";
import { FADE_ANIMATION } from "../../../constants/animationData";
import { BG_IMAGE } from "../../../constants/constants";
import { useUIStore2 } from "../../../store/useUIStore2";

const BackgroundLayout = () => {
  const { isVisible, toggle } = useUIStore2();
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
        variants={FADE_ANIMATION}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Full Page Background
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-300 max-w-md"
        >
          Smooth animation with Zustand + Framer Motion
        </motion.p>

        <button
          onClick={toggle}
          className="mt-6 px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition"
        >
          Toggle Content
        </button>
      </div>
    </div>
  );
};

export default BackgroundLayout;
