import { useNavbarScroll } from "../../hooks/useNavbarScroll";
import { useNavbarStore } from "../../store/useNavbarStore";
import { motion } from "framer-motion";

const ChangingNavbarStyleBasedOnScroll = () => {
  useNavbarScroll();

  const isScrolled = useNavbarStore((state) => state.isScrolled);
  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: isScrolled ? "0px 4px 20px rgba(0,0,0,0.1)" : "none",
      }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6 text-white">
        <h1 className="font-bold text-lg">Logo</h1>

        <ul className="flex gap-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default ChangingNavbarStyleBasedOnScroll;
