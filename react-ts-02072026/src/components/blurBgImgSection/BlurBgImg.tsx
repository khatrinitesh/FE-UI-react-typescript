import { motion } from "framer-motion"

export default function BlurBgImg() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero background"
          className="h-full w-full object-cover"
        />

        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-4xl font-bold text-white md:text-6xl"
          >
            Blur Background Image
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-5 text-base text-white/80 md:text-lg"
          >
            Beautiful glassmorphism hero section using React, TypeScript,
            TailwindCSS and Framer Motion.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 rounded-full bg-white px-7 py-3 font-semibold text-black shadow-lg transition hover:bg-white/90"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}