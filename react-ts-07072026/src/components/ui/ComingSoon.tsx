import { motion } from 'framer-motion'
import { Mail, Rocket } from 'lucide-react'

export default function ComingSoon() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />

      {/* Content Card */}
      <motion.section
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12"
      >
        {/* Icon */}
        <motion.div
          initial={{ rotate: -20, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 180 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 shadow-lg"
        >
          <Rocket className="h-10 w-10 text-pink-400" />
        </motion.div>

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300"
        >
          Launching Soon
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-linear-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-5xl font-black text-transparent md:text-7xl"
        >
          Coming Soon
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg"
        >
          We are working hard to bring you something amazing. Stay tuned for our
          official launch.
        </motion.p>

        {/* Email Box */}
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 sm:flex-row"
        >
          <div className="flex flex-1 items-center gap-3 rounded-xl bg-white/10 px-4">
            <Mail className="h-5 w-5 text-slate-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] active:scale-95"
          >
            Notify Me
          </button>
        </motion.form>

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-5 text-xs text-slate-500"
        >
          No spam. Only important launch updates.
        </motion.p>
      </motion.section>
    </main>
  )
}