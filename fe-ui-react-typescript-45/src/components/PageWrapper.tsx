import { motion } from "framer-motion";
import type { IPageWrapperProps } from "../interfaces";

export default function PageWrapper({ children }: IPageWrapperProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-[calc(100vh-80px)] px-6 py-16"
    >
      {children}
    </motion.main>
  );
}
