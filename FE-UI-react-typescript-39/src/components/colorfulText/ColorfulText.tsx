import { colorTextStore } from "../../store/colorTextStore";
import { motion } from "framer-motion";

const ColorfulText = () => {
  const { text, setText } = colorTextStore();
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.h1
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:200%_200%]"
      >
        {text}
      </motion.h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-4 py-2 border rounded-lg"
        placeholder="Change text..."
      />
    </div>
  );
};

export default ColorfulText;
