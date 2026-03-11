import { BACKGROUND_IMAGE, CUTOUT_TEXT } from "../../constants/constants";
import { useCutoutStore } from "../../store/useCutoutStore";
import { motion } from "framer-motion";

const CutoutText = () => {
  const { scale, setScale } = useCutoutStore();

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h1
        className="text-[120px] font-extrabold text-transparent bg-clip-text"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          WebkitBackgroundClip: "text",
        }}
        animate={{ scale }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      >
        {CUTOUT_TEXT}
      </motion.h1>
    </div>
  );
};

export default CutoutText;
