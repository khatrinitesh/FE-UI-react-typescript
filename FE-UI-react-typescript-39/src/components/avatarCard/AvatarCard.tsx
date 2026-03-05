import { motion } from "framer-motion";
import { useAvatarStore } from "../../store/useAvatarStore";
import type { Avatar } from "../../interface";

type AvatarCardProps = {
  avatar: Avatar;
};

const AvatarCard = ({ avatar }: AvatarCardProps) => {
  const { selectedId, select } = useAvatarStore();
  const isSelected = selectedId === avatar.id;

  return (
    <motion.div
      className={`relative cursor-pointer rounded-full p-1 ${
        isSelected ? "bg-blue-500" : "bg-transparent"
      }`}
      onClick={() => select(avatar.id)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src={avatar.image}
        alt={avatar.name}
        className="w-20 h-20 rounded-full object-cover"
      />
      {isSelected && (
        <motion.span
          className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-full border-2 border-blue-500"
          layoutId="selected-dot"
        />
      )}
    </motion.div>
  );
};

export default AvatarCard;
