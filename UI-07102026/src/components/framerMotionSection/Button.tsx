import { motion } from 'framer-motion'

export function Button() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-md bg-black px-4 py-2 text-white"
    >
      Click me
    </motion.button>
  )
}