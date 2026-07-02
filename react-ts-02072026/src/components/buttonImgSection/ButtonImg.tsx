
import { motion } from 'framer-motion';
export default function ButtonImg() {
  return (
     <div className="relative h-80 w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Nature"
        className="h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:bg-gray-100"
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  )
}
