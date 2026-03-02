import { ICON_COLOR, ICON_SIZE, iconVariants2 } from "../constants/constants";
import type { AnimatedIconProps } from "../interface";
import { motion } from "framer-motion";

const AnimatedIcon = ({
  children,
  size = ICON_SIZE,
  colorClass = ICON_COLOR,
}: AnimatedIconProps) => {
  return (
    <motion.div
      className={`inline-block ${colorClass}`}
      variants={iconVariants2}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      style={{ width: size, height: size }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedIcon;
