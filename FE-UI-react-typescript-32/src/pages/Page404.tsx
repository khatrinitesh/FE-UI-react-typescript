import { motion } from "framer-motion";

const Page404 = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <motion.h1
        className="text-9xl font-bold text-red-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-2xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Oops! Page not found.
      </motion.p>
    </div>
  );
};

export default Page404;
