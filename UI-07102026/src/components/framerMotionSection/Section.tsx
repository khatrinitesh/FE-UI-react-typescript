import { motion } from 'framer-motion'

export function Section() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
      }}
      className="p-10"
    >
      Appears when you scroll here
    </motion.div>
  )
}