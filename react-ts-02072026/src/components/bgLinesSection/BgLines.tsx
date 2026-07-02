import { motion } from "framer-motion"

export default function BgLines() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute top-0 h-full w-px bg-linear-to-b from-transparent via-white/20 to-transparent"
            style={{
              left: `${index * 6}%`,
            }}
            initial={{ opacity: 0, y: -80 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [-80, 80, -80],
            }}
            transition={{
              duration: 5 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      {/* Horizontal Glow Lines */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute left-0 h-px w-full bg-linear-to-r from-transparent via-cyan-400/20 to-transparent"
            style={{
              top: `${index * 14}%`,
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: [0, 0.5, 0],
              x: [-100, 100, -100],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <motion.h1
            className="text-4xl font-bold md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Animated Background Lines
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            React TypeScript, TailwindCSS and Framer Motion UI background.
          </motion.p>
        </div>
      </div>
    </section>
  )
}