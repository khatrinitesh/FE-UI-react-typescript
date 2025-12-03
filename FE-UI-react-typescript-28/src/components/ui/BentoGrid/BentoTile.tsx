// BentoTile.tsx
import { motion } from "framer-motion";
import { useBentoStore } from "../../../store/useBentoStore";

interface Props {
  id: number;
  title: string;
  image: string;
}

export default function BentoTile({ id, title, image }: Props) {
  const { selectedId, setSelected } = useBentoStore();
  const isSelected = selectedId === id;

  return (
    <motion.div
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer ${
        isSelected ? "ring-4 ring-blue-500" : ""
      }`}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-2 text-white text-sm">
        {title}
      </div>
    </motion.div>
  );
}
