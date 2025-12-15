import { AVATARS } from "../../constants/constants";
import { useAvatarStore } from "../../store/avatar.store";
import { motion } from "framer-motion";

const AvatarImages = () => {
  const { selectedId, selectAvatar } = useAvatarStore();
  return (
    <div className="flex gap-4 p-4 justify-center flex-wrap">
      {AVATARS.map((avatar) => (
        <motion.div
          key={avatar.id}
          className={`relative rounded-full cursor-pointer border-4 ${
            selectedId === avatar.id ? "border-blue-500" : "border-transparent"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => selectAvatar(avatar.id)}
        >
          <img
            src={avatar.image}
            alt={avatar.name}
            className="w-24 h-24 object-cover rounded-full"
          />
          {selectedId === avatar.id && (
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-blue-400"
              layoutId="selectedAvatar"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AvatarImages;
