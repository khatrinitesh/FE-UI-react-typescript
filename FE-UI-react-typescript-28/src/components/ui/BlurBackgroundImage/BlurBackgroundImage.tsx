import { motion } from "framer-motion";
import { useBlurBgImgStore } from "../../../store/useBlurBgImgStore";

const BlurBackgroundImage = () => {
  const blur = useBlurBgImgStore((s) => s.blur);
  return (
    <motion.div
      animate={{ filter: blur ? "blur(12px)" : "blur(0px)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    />
  );
};

export default BlurBackgroundImage;
