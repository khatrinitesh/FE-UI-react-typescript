import { useEffect } from "react";
import { useBannerStore } from "../store/useBannerStore";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const { activeBanner, nextBanner } = useBannerStore();

  // Auto cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextBanner, 5000);
    return () => clearInterval(interval);
  }, [nextBanner]);
  return (
    <div className="w-full h-64 relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={activeBanner.id}
          className={`w-full h-full flex flex-col items-center justify-center text-white p-6 ${activeBanner.bgColor}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-2">{activeBanner.title}</h1>
          <p className="text-lg mb-4">{activeBanner.description}</p>
          <a
            href={activeBanner.ctaLink}
            className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            {activeBanner.ctaText}
          </a>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Banner;
