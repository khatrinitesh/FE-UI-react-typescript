import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Banner() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-16 text-white shadow-xl md:px-12">
      {/* Background blur circles */}
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur"
        >
          New Collection Available
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight md:text-6xl"
        >
          Build Beautiful UI Faster
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-white/85 md:text-lg"
        >
          Create modern, responsive, and animated interfaces using React,
          TypeScript, TailwindCSS, and Framer Motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <button className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg transition hover:bg-gray-100">
            Get Started
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}