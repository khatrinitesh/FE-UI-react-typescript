import { COLORS2 } from "../../constants/constants";
import { useColorStore } from "../../store/colorStore";
import { motion } from "framer-motion";

const ColorPicker = () => {
  const { selected, setColor } = useColorStore();
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Selected Color Preview */}
      <motion.div
        animate={{ backgroundColor: selected }}
        transition={{ duration: 0.3 }}
        className="w-24 h-24 rounded-xl shadow-lg"
      />

      {/* Color Options */}
      <div className="flex gap-4">
        {COLORS2.map((color) => {
          const active = selected === color.hex;

          return (
            <motion.button
              key={color.id}
              onClick={() => setColor(color.hex)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: active ? 1.2 : 1,
                borderWidth: active ? 3 : 1,
              }}
              className="w-10 h-10 rounded-full border border-gray-300"
              style={{ backgroundColor: color.hex }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
