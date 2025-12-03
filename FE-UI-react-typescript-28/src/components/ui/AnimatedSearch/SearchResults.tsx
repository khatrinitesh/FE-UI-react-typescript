import { AnimatePresence, motion } from "framer-motion";
import { useSearch } from "../../../hooks/useSearch";

const SearchResults = () => {
  const { data, isLoading } = useSearch();
  return (
    <AnimatePresence>
      {data && data.length > 0 && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-4 bg-white shadow-md rounded-lg p-4 space-y-2"
        >
          {isLoading ? (
            <li>Loading…</li>
          ) : (
            data.map((item: any) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="p-2 border-b last:border-none cursor-pointer"
              >
                {item.title}
              </motion.li>
            ))
          )}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default SearchResults;
