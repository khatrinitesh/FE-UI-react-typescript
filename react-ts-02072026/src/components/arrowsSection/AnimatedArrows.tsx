import { motion } from "framer-motion"
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ChevronRight,
} from "lucide-react"

export default function AnimatedArrows() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-6">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
        {/* Arrow Right */}
        <motion.button
          whileHover={{ x: 8 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-gray-900 shadow-lg"
        >
          <ArrowRight size={32} />
        </motion.button>

        {/* Arrow Left */}
        <motion.button
          whileHover={{ x: -8 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-gray-900 shadow-lg"
        >
          <ArrowLeft size={32} />
        </motion.button>

        {/* Arrow Up */}
        <motion.button
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-gray-900 shadow-lg"
        >
          <ArrowUp size={32} />
        </motion.button>

        {/* Arrow Down */}
        <motion.button
          whileHover={{ y: 8 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-gray-900 shadow-lg"
        >
          <ArrowDown size={32} />
        </motion.button>

        {/* Sliding Chevron */}
        <motion.button
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
          className="group flex h-20 w-20 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg"
        >
          <motion.span
            variants={{
              hover: {
                x: [0, 6, 0],
              },
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
          >
            <ChevronRight size={34} />
          </motion.span>
        </motion.button>
      </div>
    </div>
  )
}