import { motion } from "framer-motion"

export default function AnimatedImageBorder() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <motion.div
        animate={{
          borderColor: [
            "rgba(239, 68, 68, 1)",
            "rgba(59, 130, 246, 1)",
            "rgba(34, 197, 94, 1)",
            "rgba(239, 68, 68, 1)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="rounded-2xl border-4 p-2 shadow-xl"
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