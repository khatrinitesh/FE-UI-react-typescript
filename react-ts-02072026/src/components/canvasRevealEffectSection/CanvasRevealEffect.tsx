import { motion, useMotionValue, useSpring } from "framer-motion"
import React from "react"

type CanvasRevealEffectProps = {
  image: string
  title: string
  description: string
}

export default function CanvasRevealEffect({
  image,
  title,
  description,
}: CanvasRevealEffectProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()

    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative h-[420px] w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-neutral-950"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover opacity-40 transition duration-500 group-hover:opacity-100"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 transition duration-500 group-hover:bg-black/20" />

      {/* Reveal Circle */}
      <motion.div
        className="pointer-events-none absolute h-40 w-40 rounded-full bg-white/30 blur-2xl"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Canvas Grid Effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-white"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-2 text-sm text-white/70"
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}