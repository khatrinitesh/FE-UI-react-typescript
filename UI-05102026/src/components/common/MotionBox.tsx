import { motion } from "framer-motion"
import type { ReactNode } from "react"

type MotionBoxProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function MotionBox({
  children,
  className = "",
  delay = 0,
}: MotionBoxProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}