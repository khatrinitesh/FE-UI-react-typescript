import { motion } from "framer-motion"
import { ArrowRight, Download, Loader2, Send } from "lucide-react"
import { useState } from "react"

export default function AnimatedButtons() {
  const [loading, setLoading] = useState(false)

  const handleLoadingClick = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl space-y-10">
        <div>
          <h1 className="text-3xl font-bold">Animated Buttons</h1>
          <p className="mt-2 text-slate-400">
            React TypeScript, TailwindCSS and Framer Motion examples.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Scale Button */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition"
          >
            Hover Scale
          </motion.button>

          {/* Icon Move Button */}
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            className="group flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30"
          >
            Get Started
            <motion.span
              variants={{
                hover: {
                  x: 6,
                },
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>

          {/* Gradient Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.45)",
            }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white"
          >
            Gradient Button
          </motion.button>

          {/* Border Glow Button */}
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{ scale: 0.96 }}
            className="rounded-xl border border-cyan-400/60 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition"
          >
            Border Glow
          </motion.button>

          {/* Download Button */}
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900"
          >
            <motion.span
              variants={{
                hover: {
                  y: [0, -4, 0],
                },
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <Download size={18} />
            </motion.span>
            Download
          </motion.button>

          {/* Loading Button */}
          <motion.button
            onClick={handleLoadingClick}
            disabled={loading}
            whileHover={!loading ? { scale: 1.05 } : undefined}
            whileTap={!loading ? { scale: 0.95 } : undefined}
            className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Now
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  )
}