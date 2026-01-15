import { useEffect } from "react";
import { useBoxesStore } from "../store/useBoxesStore";
import { motion } from "framer-motion";

const BackgroundBoxes = () => {
  const { boxes, updateBoxes } = useBoxesStore();

  useEffect(() => {
    const interval = setInterval(updateBoxes, 16); // ~60fps
    return () => clearInterval(interval);
  }, [updateBoxes]);

  useEffect(() => {
    const interval = setInterval(updateBoxes, 16); // ~60fps
    return () => clearInterval(interval);
  }, [updateBoxes]);
  return (
    <div className="absolute inset-0 overflow-hidden bg-gray-900">
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className="absolute bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-70"
          style={{
            width: box.size,
            height: box.size,
            x: box.x,
            y: box.y,
            rotate: box.rotate,
          }}
          animate={{ x: box.x, y: box.y, rotate: box.rotate }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        />
      ))}
    </div>
  );
};

export default BackgroundBoxes;
