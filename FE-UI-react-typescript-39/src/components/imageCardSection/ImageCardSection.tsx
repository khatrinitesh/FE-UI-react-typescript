import { GALLERY_IMAGES } from "../../constants/constants";
import type { GalleryImage } from "../../interface";
import { useGalleryStore } from "../../store/useGalleryStore";
import { motion } from "framer-motion";

const ImageCardSection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6">
      {GALLERY_IMAGES.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
};

export default ImageCardSection;

type ImageCardProps = {
  image: GalleryImage;
};

const ImageCard = ({ image }: ImageCardProps) => {
  const { selectedId, select } = useGalleryStore();
  const isSelected = selectedId === image.id;

  return (
    <motion.div
      className="relative cursor-pointer overflow-hidden rounded-lg"
      onClick={() => select(image.id)}
      whileHover={{ scale: 1.05 }}
      animate={{ scale: isSelected ? 1.1 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover grayscale"
        whileHover={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.3 }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white text-sm">
        {image.title}
      </div>
    </motion.div>
  );
};
