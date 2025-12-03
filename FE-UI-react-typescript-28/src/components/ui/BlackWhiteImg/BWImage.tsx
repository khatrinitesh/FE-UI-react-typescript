import { motion } from "framer-motion";
import { useBWImageStore } from "../../../store/useBWImageStore";

interface Props {
  id: number;
  url: string;
  author: string;
}

export default function BWImage({ id, url, author }: Props) {
  const { selectedId, setSelected } = useBWImageStore();
  const isSelected = selectedId === id;

  return (
    <motion.div
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative rounded-lg overflow-hidden shadow-md cursor-pointer ${
        isSelected ? "ring-4 ring-blue-500" : ""
      }`}
    >
      <motion.img
        src={url}
        alt={author}
        className="w-full h-60 object-cover filter grayscale transition-all duration-300"
        whileHover={{ filter: "grayscale(0%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-2 text-sm">
        {author}
      </div>
    </motion.div>
  );
}
