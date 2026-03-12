import { DEFAULT_COLOR, DIVIDER_TEXT } from "../../constants/constants";
import { useDividerStore } from "../../store/useDividerStore";
import { motion } from "framer-motion";

const DividerSection = ({ text = DIVIDER_TEXT, color = DEFAULT_COLOR }) => {
  const { visible } = useDividerStore();
  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex items-center gap-4 my-6"
    >
      <div className={`flex-1 h-px ${color}`} />

      {text && (
        <span className="text-sm text-gray-500 whitespace-nowrap">{text}</span>
      )}

      <div className={`flex-1 h-px ${color}`} />
    </motion.div>
  );
};

export default DividerSection;
