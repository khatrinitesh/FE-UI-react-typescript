import { motion, AnimatePresence } from "framer-motion";
import { SIDENAV_MENU } from "../../constants/constants";
import { useSideNavStore } from "../../store/useSideNavStore";
import type { MenuItem2 } from "../../interface";

const SideNavSection = () => {
  const { openMenu, toggleMenu } = useSideNavStore();
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      {SIDENAV_MENU.map((item: MenuItem2) => (
        <div key={item.id} className="mb-2">
          {/* Parent Menu */}
          <button
            onClick={() => toggleMenu(item.id)}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            {item.title}
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {openMenu === item.id && item.children && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4 overflow-hidden"
              >
                {item.children.map((child, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer"
                  >
                    {child}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default SideNavSection;
