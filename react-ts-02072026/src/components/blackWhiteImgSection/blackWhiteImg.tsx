import { motion } from "framer-motion"

export default function BlackWhiteImage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black px-6">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-3xl bg-white p-2 shadow-2xl"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Black and white preview"
          className="h-105 w-[320px] rounded-2xl object-cover grayscale transition-all duration-500 group-hover:grayscale-0 md:w-[520px]"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        />

        <div className="absolute inset-2 rounded-2xl bg-black/20 opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-6 left-6 right-6 text-white"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">
            Monochrome
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            Black & White Image
          </h2>
        </motion.div>
      </motion.div>
    </section>
  )
}