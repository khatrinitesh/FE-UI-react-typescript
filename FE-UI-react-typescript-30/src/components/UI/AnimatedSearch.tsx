import { useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchStore } from "../../store/search.store";
import { FaSearch } from "react-icons/fa";
import { ITEMS } from "../../constants/constants";

const AnimatedSearch = () => {
  const { query, setQuery, results, setResults } = useSearchStore();

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = ITEMS.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);
  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <motion.div
        className="relative"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0 }}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FaSearch className="absolute right-3 top-2.5 text-gray-400" />
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: results.length ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="mt-2 border border-gray-200 rounded-lg overflow-hidden"
      >
        {results.map((item) => (
          <motion.li
            key={item.id}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            {item.name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default AnimatedSearch;
