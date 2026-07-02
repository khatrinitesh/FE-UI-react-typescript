import { motion } from "framer-motion"
import { Bell, Heart, Menu, Star, X } from "lucide-react"
import { useState } from "react"

export default function AnimatedIcons() {
  const [isOpen, setIsOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const [starred, setStarred] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex items-center gap-6 rounded-2xl bg-white p-8 shadow-lg">
        
        {/* Menu / X Animated Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full bg-gray-100 p-4 transition hover:bg-gray-200"
        >
          <motion.div
            key={isOpen ? "x" : "menu"}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
          >
            {isOpen ? (
              <X className="size-6 text-red-500" />
            ) : (
              <Menu className="size-6 text-gray-800" />
            )}
          </motion.div>
        </button>

        {/* Heart Like Animated Icon */}
        <button
          onClick={() => setLiked(!liked)}
          className="rounded-full bg-gray-100 p-4 transition hover:bg-gray-200"
        >
          <motion.div
            animate={{
              scale: liked ? [1, 1.4, 1] : 1,
              rotate: liked ? [0, -15, 15, 0] : 0,
            }}
            transition={{ duration: 0.35 }}
          >
            <Heart
              className={`size-6 ${
                liked
                  ? "fill-red-500 text-red-500"
                  : "text-gray-700"
              }`}
            />
          </motion.div>
        </button>

        {/* Bell Shake Animated Icon */}
        <button className="rounded-full bg-gray-100 p-4 transition hover:bg-gray-200">
          <motion.div
            whileHover={{
              rotate: [0, -15, 15, -10, 10, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            <Bell className="size-6 text-blue-500" />
          </motion.div>
        </button>

        {/* Star Fill Animated Icon */}
        <button
          onClick={() => setStarred(!starred)}
          className="rounded-full bg-gray-100 p-4 transition hover:bg-gray-200"
        >
          <motion.div
            animate={{
              scale: starred ? [1, 1.3, 1] : 1,
              rotate: starred ? [0, 20, -20, 0] : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Star
              className={`size-6 ${
                starred
                  ? "fill-red-500 text-red-500"
                  : "text-gray-700"
              }`}
            />
          </motion.div>
        </button>
      </div>
    </div>
  )
}