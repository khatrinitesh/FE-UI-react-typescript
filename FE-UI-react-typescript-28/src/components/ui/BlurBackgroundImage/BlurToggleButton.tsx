import { useBlurBgImgStore } from "../../../store/useBlurBgImgStore";
import { motion } from "framer-motion";

const BlurToggleButton = () => {
  const { blur, toggleBlur } = useBlurBgImgStore();
  return (
    <motion.button
      onClick={toggleBlur}
      whileTap={{ scale: 0.9 }}
      style={{
        padding: "10px 20px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        background: blur ? "#ffffffaa" : "#000000aa",
        color: blur ? "#000" : "#fff",
        backdropFilter: "blur(4px)",
      }}
    >
      {blur ? "Unblur background" : "Blur background"}
    </motion.button>
  );
};

export default BlurToggleButton;
