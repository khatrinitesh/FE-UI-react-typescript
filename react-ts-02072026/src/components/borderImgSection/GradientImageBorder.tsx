import { motion } from "framer-motion"

export default function GradientImageBorder() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 p-1 shadow-xl"
      >
        <img
          src="/images/demo.jpg"
          alt="Demo"
          className="h-64 w-64 rounded-xl object-cover"
        />
      </motion.div>
    </div>
  )
}