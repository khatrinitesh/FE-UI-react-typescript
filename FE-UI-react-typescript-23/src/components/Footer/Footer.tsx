import { motion } from "framer-motion";

const Footer = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center py-6 z-40"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <p className="text-[#6e4a8e] text-sm underline underline-offset-4 cursor-pointer hover:text-purple-800">
        How does it work?
      </p>
      <button className="mt-4 bg-[#90d1ee] congenial-medium  text-lg px-18  sm:px-24 md:px-34 cursor-pointer py-4 rounded-full shadow-md hover:shadow-lg hover:bg-sky-400 transition-all duration-300 text-[#6c4b97]">
        Create my song now
      </button>
    </motion.footer>
  );
};

export default Footer;
