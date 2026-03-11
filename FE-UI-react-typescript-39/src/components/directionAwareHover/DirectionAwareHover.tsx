import { CARD_OVERLAY_TEXT, CARD_TEXT } from "../../constants/constants";
import { useHoverStore } from "../../store/useDirectionHoverStore";
import GetHoverDirection from "./GetHoverDirection";
import { motion } from "framer-motion";

const DirectionAwareHover = () => {
  const { direction, setDirection } = useHoverStore();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const dir = GetHoverDirection(e);
    setDirection(dir);
  };

  const variants = {
    initial: { x: 0, y: 0, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div
        onMouseEnter={handleMouseEnter}
        className="relative w-64 h-40 bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
      >
        <span className="text-lg font-semibold">{CARD_TEXT}</span>

        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.35 }}
          className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center"
        >
          {CARD_OVERLAY_TEXT} ({direction})
        </motion.div>
      </div>
    </div>
  );
};

export default DirectionAwareHover;
