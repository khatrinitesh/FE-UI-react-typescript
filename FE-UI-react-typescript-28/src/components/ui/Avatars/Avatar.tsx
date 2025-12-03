import type { AvatarProps } from "../../../interface";
import { useAvatarStore } from "../../../store/useAvatarStore";
import { motion } from "framer-motion";

const Avatar = ({ id, src, name }: AvatarProps) => {
  const { selected, setSelected } = useAvatarStore();

  const isActive = selected === id;
  return (
    <motion.div
      className="flex flex-col items-center cursor-pointer"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src={src}
        alt={name}
        className="w-16 h-16 rounded-full object-cover shadow-md"
        animate={{
          borderWidth: isActive ? 4 : 2,
          borderColor: isActive ? "#3b82f6" : "#e5e7eb",
          scale: isActive ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{ borderStyle: "solid" }}
      />

      <motion.span
        className="text-sm mt-1 text-gray-700"
        animate={{ opacity: isActive ? 1 : 0.6 }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

export default Avatar;
