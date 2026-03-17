import { motion } from "framer-motion";
import { FLOATING_NAV_ITEMS } from "../../constants/constants";
import { useNavbarStore } from "../../store/useFloatNavbarStore";

const FloatingNavbar = () => {
  const { activeId, setActive } = useNavbarStore();
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="flex items-center gap-6 px-8 py-3 
        bg-white/10 backdrop-blur-lg 
        border border-white/20 
        rounded-full shadow-lg"
      >
        {FLOATING_NAV_ITEMS.map((item) => (
          <motion.a
            key={item.id}
            href={item.href}
            onMouseEnter={() => setActive(item.id)}
            onMouseLeave={() => setActive(null)}
            className="relative text-sm font-medium text-white/80"
            animate={{
              scale: activeId === item.id ? 1.1 : 1,
              color: activeId === item.id ? "#fff" : "#ccc",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {item.label}

            {/* Underline Animation */}
            {activeId === item.id && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-white rounded-full"
              />
            )}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNavbar;
