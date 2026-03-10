import { MAX_CHARACTERS, WARNING_THRESHOLD } from "../../constants/constants";
import { useCharacterStore } from "../../store/useCharacterStore";
import { motion } from "framer-motion";

const CharacterCounter = () => {
  const { text, setText } = useCharacterStore();

  const remaining = MAX_CHARACTERS - text.length;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={MAX_CHARACTERS}
        placeholder="Type something..."
        className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <div className="flex justify-between items-center">
        <motion.div
          key={remaining}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className={`text-sm font-medium ${
            remaining <= 20
              ? "text-red-500"
              : remaining <= WARNING_THRESHOLD
                ? "text-yellow-500"
                : "text-gray-500"
          }`}
        >
          {remaining} characters remaining
        </motion.div>

        <motion.div className="h-2 bg-gray-200 rounded-full w-40 overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            animate={{
              width: `${(text.length / MAX_CHARACTERS) * 100}%`,
            }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CharacterCounter;
