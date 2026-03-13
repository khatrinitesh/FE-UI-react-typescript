import { AnimatePresence, motion } from "framer-motion";
import { FAT_NAV_LINKS } from "../../constants/constants";
import { useFatNavStore } from "../../store/useFatNavStore";

const FatNavSection = () => {
  const { isOpen, toggleNav } = useFatNavStore();
  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleNav}
        className="fixed top-6 right-6 z-50 bg-black text-white px-4 py-2 rounded-lg"
      >
        Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black text-white flex items-center justify-center z-40"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="text-4xl font-bold space-y-8 text-center"
            >
              {FAT_NAV_LINKS.map((item) => (
                <motion.li
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    className="hover:text-indigo-400 transition"
                    onClick={toggleNav}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FatNavSection;
