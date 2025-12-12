import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Landing = () => {
  useEffect(() => {
    gsap.from(".landing-title", { y: -50, opacity: 0, duration: 1 });
  }, []);
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="landing-title text-white text-5xl font-bold">
        Welcome to the Dashboard
      </h1>
    </motion.div>
  );
};

export default Landing;
