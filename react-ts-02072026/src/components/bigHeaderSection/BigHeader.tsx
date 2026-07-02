import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function BigHeader() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-black px-6 py-24 text-white">
      {/* Background blur circles */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto flex m   ax-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-yellow-400" />
          Modern React TypeScript UI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Build Beautiful Interfaces With{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            React & Tailwind
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
        >
          Create responsive, animated, and clean UI components using React,
          TypeScript, TailwindCSS, and Framer Motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-200">
            Get Started
            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
            View Demo
          </button>
        </motion.div>
      </div>
    </section>
  )
}