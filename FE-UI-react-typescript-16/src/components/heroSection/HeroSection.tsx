import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-blue-100 py-32 text-center">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Our Landing Page
      </motion.h1>
      <motion.p
        className="text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We create beautiful web experiences
      </motion.p>
      <motion.button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default HeroSection;
