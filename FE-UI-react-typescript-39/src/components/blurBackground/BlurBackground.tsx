import { motion } from "framer-motion";
import { useBackgroundStore } from "../../store/useBackgroundStore";
import { BACKGROUND_IMAGES } from "../../constants/constants";

const BlurBackground = () => {
  const { activeId } = useBackgroundStore();

  const image = BACKGROUND_IMAGES.find((img) => img.id === activeId);

  if (!image) return null;

  return (
    <motion.div
      key={image.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 -z-10"
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover blur-xl scale-110 brightness-75"
      />
    </motion.div>
  );
};

export default BlurBackground;
