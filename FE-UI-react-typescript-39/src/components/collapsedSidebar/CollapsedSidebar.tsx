import { SIDEBAR_ITEMS } from "../../constants/constants";
import { useSidebarStore } from "../../store/sidebarStore";
import { motion } from "framer-motion";

const CollapsedSidebar = () => {
  const { collapsed, toggleSidebar } = useSidebarStore();

  return (
    <motion.div
      animate={{ width: collapsed ? 80 : 220 }}
      transition={{ duration: 0.3 }}
      className="h-screen bg-gray-900 text-white flex flex-col p-3"
    >
      <button onClick={toggleSidebar} className="mb-6 p-2 bg-gray-700 rounded">
        ☰
      </button>

      <nav className="flex flex-col gap-4">
        {SIDEBAR_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer"
          >
            <span className="text-xl">{item.icon}</span>

            {!collapsed && <span className="text-sm">{item.label}</span>}
          </div>
        ))}
      </nav>
    </motion.div>
  );
};

export default CollapsedSidebar;
