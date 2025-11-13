import { motion } from "framer-motion";

const FixedFooter = () => {
  return (
    <motion.footer className="fixed bottom-0 left-0 w-full shadow-[0_-2px_8px_rgba(0,0,0,0.08)] bg-white px-4 py-3 flex flex-col items-center justify-center  z-40">
      <button className=" bg-[#90d1ee] w-full  congenial-medium  text-lg px-10 cursor-pointer py-4 rounded-full hover:shadow-lg hover:bg-sky-400 transition-all duration-300 text-[#4a2b7b]">
        Continue
      </button>
    </motion.footer>
  );
};

export default FixedFooter;
