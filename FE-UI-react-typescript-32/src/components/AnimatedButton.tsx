import { motion } from "framer-motion";
const AnimatedButton = ({ label }: { label: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 bg-blue-600 text-white rounded shadow-lg"
    >
      {label}
    </motion.button>
  );
};

export default AnimatedButton;
