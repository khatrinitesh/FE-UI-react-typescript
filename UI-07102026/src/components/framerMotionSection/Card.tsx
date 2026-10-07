import { motion } from 'framer-motion'

export function Card() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border p-6"
    >
      Hello Framer Motion
    </motion.div>
  )
}