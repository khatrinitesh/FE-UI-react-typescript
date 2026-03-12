import { DRAG_TEXT } from "../../constants/constants";
import { useDragStore } from "../../store/useDragStore";
import { motion } from "framer-motion";

interface DraggableBoxProps {
  className?: string;
}

const DraggableBoxSection = ({ className }: DraggableBoxProps) => {
  const { setDragging } = useDragStore();
  return (
    <motion.div
      drag
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      onDragStart={() => setDragging(true)}
      onDragEnd={() => setDragging(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`w-40 h-40 flex items-center justify-center rounded-xl cursor-grab bg-blue-500 text-white font-semibold shadow-lg ${className}`}
    >
      {DRAG_TEXT}
    </motion.div>
  );
};

export default DraggableBoxSection;
