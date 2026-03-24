import { motion } from "framer-motion";
import { barVariants } from "../../../constants/constants";

const LoaderSection = () => {
  return (
    <div className="flex items-center justify-center gap-1 fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.8)]">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          custom={i}
          variants={barVariants}
          animate="animate"
          className={`w-[3px] ${
            i === 1 ? "h-[35px]" : "h-[20px]"
          } rounded bg-white/50`}
        />
      ))}
    </div>
  );
};

export default LoaderSection;
