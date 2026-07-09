import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springX = useSpring(cursorX, {
    stiffness: 500,
    damping: 35,
  })

  const springY = useSpring(cursorY, {
    stiffness: 500,
    damping: 35,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 12)
      cursorY.set(event.clientY - 12)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea, select, [data-cursor='hover']"
    )

    window.addEventListener("mousemove", handleMouseMove)

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)

      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-9999 hidden size-6 rounded-full bg-red-500 mix-blend-difference md:block"
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        scale: isHovering ? 2.4 : 1,
        opacity: isHovering ? 0.75 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    />
  )
}