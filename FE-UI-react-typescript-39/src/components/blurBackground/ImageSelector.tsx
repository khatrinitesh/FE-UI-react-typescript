import { BACKGROUND_IMAGES } from "../../constants/constants";
import { useBackgroundStore } from "../../store/useBackgroundStore";
import { motion } from "framer-motion";

const ImageSelector = () => {
  const { activeId, setActive } = useBackgroundStore();
  return (
    <div className="flex gap-6 mt-10">
      {BACKGROUND_IMAGES.map((img) => {
        const active = img.id === activeId;

        return (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(img.id)}
            className={`cursor-pointer rounded-xl overflow-hidden border-2 ${
              active ? "border-white" : "border-transparent"
            }`}
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-40 h-24 object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImageSelector;
