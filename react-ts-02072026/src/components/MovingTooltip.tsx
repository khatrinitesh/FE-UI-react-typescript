import { motion, useMotionValue, useSpring } from "framer-motion"
import React from "react"

interface MovingTooltipProps {
  text: string
  tooltip: string
}

export default function MovingTooltip({ text, tooltip }: MovingTooltipProps) {
  const [isHovering, setIsHovering] = React.useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
  })

  const springY = useSpring(mouseY, {
    stiffness: 300,
    damping: 25,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()

    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative inline-block"
    >
      <span className="cursor-pointer rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white">
        {text}
      </span>

      {isHovering && (
        <motion.div
          style={{
            x: springX,
            y: springY,
          }}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
          }}
          className="pointer-events-none absolute left-0 top-0 z-50 -translate-x-1/2 -translate-y-[140%] whitespace-nowrap rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white shadow-lg"
        >
          {tooltip}
        </motion.div>
      )}
    </div>
  )
}