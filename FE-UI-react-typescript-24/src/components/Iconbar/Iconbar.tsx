import { useState } from "react";
import { motion } from "framer-motion";
import { tabs } from "../../constants/constants";

const Iconbar = () => {
  const [active, setActive] = useState(0);
  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2
        bg-white shadow-xl rounded-3xl
        flex items-center gap-6 px-6 py-3
        border border-gray-200
      "
    >
      {tabs.map((tab, i) => {
        const Icon = tab.icon; // 👈 IMPORTANT

        return (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative flex flex-col items-center"
          >
            {active === i && (
              <motion.div
                layoutId="activeBubble"
                className="absolute -top-2 h-8 w-8 bg-blue-100 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}

            <motion.div
              animate={{ scale: active === i ? 1.2 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative z-10 text-gray-700"
            >
              <Icon size={22} /> {/* 👈 Render icon here */}
            </motion.div>
          </button>
        );
      })}
    </div>
  );
};

export default Iconbar;
