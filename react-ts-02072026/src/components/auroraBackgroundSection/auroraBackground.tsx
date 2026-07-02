import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AuroraBackgroundProps {
  children?: ReactNode
  className?: string
}

export default function AuroraBackground({
  children,
  className = "",
}: AuroraBackgroundProps) {
  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-slate-950 text-white ${className}`}
    >
      {/* Aurora Gradient Layer */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-70 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.45), transparent 30%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.45), transparent 30%), radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.35), transparent 35%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Moving Aurora Shape 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[10%] h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl"
      />

      {/* Moving Aurora Shape 2 */}
      <motion.div
        animate={{
          x: [0, -100, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 1.2, 1.4, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"
      />

      {/* Moving Aurora Shape 3 */}
      <motion.div
        animate={{
          x: [0, 80, -120, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.4, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full bg-emerald-400/25 blur-3xl"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        {children}
      </div>
    </div>
  )
}