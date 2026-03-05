import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div className="flex justify-center mt-20">
      <motion.div
        className="flex items-center bg-gray-800 rounded-full shadow-lg overflow-hidden"
        animate={{ width: isFocused ? 400 : 200 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search..."
          className="bg-transparent text-white placeholder-gray-400 px-4 py-2 outline-none w-full"
        />
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white font-semibold transition-all duration-200">
          Search
        </button>
      </motion.div>
    </div>
  );
};

export default AnimatedSearch;
