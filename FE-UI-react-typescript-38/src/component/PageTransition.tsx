import { motion } from "framer-motion";
import { pageVariants } from "../constants/animation";

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.4 }}
    className="w-full"
  >
    {children}
  </motion.div>
);
