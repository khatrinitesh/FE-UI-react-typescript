import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function ListVariants() {
  const items = ['React', 'TypeScript', 'Tailwind']

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-3"
    >
      {items.map((item) => (
        <motion.div
          key={item}
          variants={itemVariants}
          className="rounded-lg border p-4"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  )
}