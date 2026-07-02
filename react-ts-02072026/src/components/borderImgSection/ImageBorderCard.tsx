import { motion } from "framer-motion"

export default function ImageBorderCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border-4 border-red-500 p-2 shadow-lg"
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