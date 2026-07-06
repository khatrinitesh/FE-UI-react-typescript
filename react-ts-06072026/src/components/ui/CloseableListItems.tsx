import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, Bell, ShoppingCart, User, Heart } from "lucide-react";

const ClosableListItems = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "New Message",
      description: "You received a new message.",
      icon: Mail,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Notification",
      description: "Your profile was updated.",
      icon: Bell,
      color: "bg-yellow-500",
    },
    {
      id: 3,
      title: "Shopping Cart",
      description: "A new item was added.",
      icon: ShoppingCart,
      color: "bg-green-500",
    },
    {
      id: 4,
      title: "Profile",
      description: "Profile completed successfully.",
      icon: User,
      color: "bg-purple-500",
    },
    {
      id: 5,
      title: "Wishlist",
      description: "Item added to wishlist.",
      icon: Heart,
      color: "bg-pink-500",
    },
  ]);

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md">

        <h1 className="mb-6 text-3xl font-bold text-slate-800">
          Closable List
        </h1>

        <AnimatePresence>
          {items.length > 0 ? (
            items.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{
                    opacity: 0,
                    x: -50,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: 120,
                    scale: 0.5,
                    transition: {
                      duration: 0.35,
                    },
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  className="mb-4 flex items-center rounded-2xl bg-white p-4 shadow-lg"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${item.color}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="ml-4 flex-1">
                    <h2 className="font-semibold text-slate-800">
                      {item.title}
                    </h2>

                    <p className="text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{
                      rotate: 90,
                      scale: 1.15,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    onClick={() => removeItem(item.id)}
                    className="rounded-full p-2 text-slate-400 transition hover:bg-red-100 hover:text-red-500"
                  >
                    <X size={18} />
                  </motion.button>
                </motion.div>
              );
            })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl bg-white p-8 text-center shadow-lg"
            >
              <div className="mb-4 text-6xl">🎉</div>

              <h2 className="text-xl font-bold text-slate-700">
                All Items Closed
              </h2>

              <p className="mt-2 text-slate-500">
                There are no list items remaining.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClosableListItems;