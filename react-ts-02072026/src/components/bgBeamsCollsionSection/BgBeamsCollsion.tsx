import { motion } from "framer-motion"

type Beam = {
  id: number
  left: string
  delay: number
  duration: number
  height: number
}

const beams: Beam[] = [
  { id: 1, left: "10%", delay: 0, duration: 6, height: 120 },
  { id: 2, left: "25%", delay: 1.2, duration: 7, height: 180 },
  { id: 3, left: "42%", delay: 0.6, duration: 5.5, height: 140 },
  { id: 4, left: "58%", delay: 1.8, duration: 6.5, height: 200 },
  { id: 5, left: "75%", delay: 0.3, duration: 7.5, height: 160 },
  { id: 6, left: "90%", delay: 1, duration: 6, height: 130 },
]

export default function BgBeamsCollsion() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_45%)]" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Beams */}
      <div className="absolute inset-0">
        {beams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute top-[-220px] w-px rounded-full bg-gradient-to-b from-transparent via-cyan-300 to-transparent"
            style={{
              left: beam.left,
              height: beam.height,
            }}
            animate={{
              y: ["0vh", "115vh"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: beam.duration,
              delay: beam.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Collision line */}
      <div className="absolute bottom-24 left-0 right-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      {/* Collision sparks */}
      <div className="absolute bottom-24 left-0 right-0 mx-auto h-20 max-w-5xl">
        {beams.map((beam) => (
          <motion.div
            key={`spark-${beam.id}`}
            className="absolute bottom-0 h-16 w-16 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-xl"
            style={{ left: beam.left }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay: beam.delay + beam.duration - 1,
              repeat: Infinity,
              repeatDelay: beam.duration - 1.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-12"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            React UI Effect
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Background Beams <br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              With Collision
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Animated light beams falling from the top and colliding with a
            glowing line using Framer Motion and TailwindCSS.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              Get Started
            </button>

            <button className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}