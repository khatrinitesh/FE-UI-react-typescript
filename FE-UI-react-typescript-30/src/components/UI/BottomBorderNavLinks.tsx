import { NAV_LINKS } from "../../constants/constants";
import { useNavStore } from "../../store/bottomBorderNavlink.store";
import { motion, AnimatePresence } from "framer-motion";

const BottomBorderNavLinks = () => {
  const { activeId, setActiveId } = useNavStore();
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <ul className="flex gap-8 relative">
        {NAV_LINKS.map((link) => (
          <li
            key={link.id}
            className="relative cursor-pointer"
            onClick={() => setActiveId(link.id)}
          >
            <span className="text-gray-800 hover:text-blue-500">
              {link.name}
            </span>

            {/* Animated bottom border */}
            <AnimatePresence>
              {activeId === link.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomBorderNavLinks;
