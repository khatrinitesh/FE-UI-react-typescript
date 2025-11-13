import { getImage } from "../../utils/assets";
import "./StickyHeader.css";
import { motion } from "framer-motion";

const StickyHeader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full shadow-[0_4px_20px_rgba(110,74,142,0.3)] bg-[linear-gradient(135deg,_rgb(108,75,164)_0%,_rgb(110,74,142)_100%)] text-white z-50 py-[2px] text-center font-semibold"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -80, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <img
        src={getImage("milka-logo-header.png")}
        alt=""
        className="w-24 h-24 mx-auto"
      />
    </motion.header>
  );
};

export default StickyHeader;
