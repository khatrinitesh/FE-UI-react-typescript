import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export function AnimationSection() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        Toggle
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="mt-4 rounded-lg border p-6"
          >
            Animated content
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}