import { useSearchStore } from "../../../store/useAnimateSearchStore";
import { motion } from "framer-motion";

const AnimatedSearchBar = () => {
  const { query, setQuery, isOpen, toggleOpen } = useSearchStore();
  return (
    <div className="relative w-full flex justify-center">
      <motion.div
        animate={{ width: isOpen ? 300 : 40 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className="flex items-center bg-white shadow-lg rounded-full p-2"
      >
        {isOpen ? (
          <motion.input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="outline-none w-full px-2"
            placeholder="Search..."
          />
        ) : null}

        <motion.button
          onClick={toggleOpen}
          whileTap={{ scale: 0.9 }}
          className="p-2 text-gray-600"
        >
          🔍
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AnimatedSearchBar;
