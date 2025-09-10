import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchStore } from "../../logic-store-state-management/useSeachStore/useSearchStore";
import { FaSearch } from "react-icons/fa";

const SearchBoxComponent = () => {
  const { query, setQuery, clearQuery } = useSearchStore();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ width: "2.5rem" }}
      animate={{ width: isFocused ? "15rem" : "2.5rem" }}
      transition={{ duration: 0.3 }}
      className="relative flex items-center bg-white rounded-full shadow-md overflow-hidden transition-all duration-300"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => query === "" && setIsFocused(false)}
        placeholder="Search..."
        className={`pl-10 pr-3 py-2 text-sm text-black outline-none w-full ${
          isFocused ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200`}
      />
      <div className="absolute left-3 text-gray-500 pointer-events-none">
        <FaSearch />
      </div>
    </motion.div>
  );
};

export default SearchBoxComponent;
