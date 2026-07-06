import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Search,
  ShoppingCart,
  Heart,
  User,
  Settings,
  Plus,
} from "lucide-react";

const CircleMenu = () => {
  const [open, setOpen] = useState(false);

  const radius = 120;

  const menus = [
    {
      icon: Home,
      label: "Home",
      bg: "bg-blue-500",
    },
    {
      icon: Search,
      label: "Search",
      bg: "bg-green-500",
    },
    {
      icon: ShoppingCart,
      label: "Cart",
      bg: "bg-orange-500",
    },
    {
      icon: Heart,
      label: "Wishlist",
      bg: "bg-pink-500",
    },
    {
      icon: User,
      label: "Profile",
      bg: "bg-purple-500",
    },
    {
      icon: Settings,
      label: "Settings",
      bg: "bg-slate-700",
    },
  ];

  return (
    <>
      {/* Mobile Only */}
      <div className="fixed bottom-8 right-8 z-50 md:hidden">
        {/* Background Blur */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        {/* Menu Items */}
        {menus.map((item, index) => {
          const angle =
            (-90 + (180 / (menus.length - 1)) * index) *
            (Math.PI / 180);

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          const Icon = item.icon;

          return (
            <motion.button
              key={item.label}
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0,
              }}
              animate={
                open
                  ? {
                      x: x,
                      y: y,
                      opacity: 1,
                      scale: 1,
                    }
                  : {
                      x: 0,
                      y: 0,
                      opacity: 0,
                      scale: 0,
                    }
              }
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 350,
                damping: 20,
              }}
              whileHover={{
                scale: 1.15,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className={`absolute bottom-0 right-0 h-14 w-14 rounded-full shadow-xl text-white ${item.bg} flex items-center justify-center`}
            >
              <Icon size={24} />

              {/* Label */}
              <span className="absolute right-16 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-lg">
                {item.label}
              </span>
            </motion.button>
          );
        })}

        {/* Center Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-2xl"
        >
          <motion.div
            animate={{
              rotate: open ? 45 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Plus size={34} strokeWidth={2.5} />
          </motion.div>

          {/* Pulse Ring */}
          <motion.span
            animate={{
              scale: open ? 1.6 : 1,
              opacity: open ? 0 : 0.35,
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute inset-0 rounded-full border-4 border-indigo-400"
          />
        </motion.button>
      </div>
    </>
  );
};

export default CircleMenu;