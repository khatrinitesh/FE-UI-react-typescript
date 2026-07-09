import { motion } from "framer-motion"

export default function CutoutText() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fb7185,transparent_35%),radial-gradient(circle_at_bottom_right,#38bdf8,transparent_35%)]" />

      {/* Moving background layer */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(120deg,#ef4444,#ec4899,#8b5cf6,#06b6d4,#22c55e)] bg-[length:300%_300%]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dark overlay with cutout text */}
      <div className="relative z-10 flex h-80 w-full max-w-5xl items-center justify-center rounded-3xl bg-black/80 shadow-2xl">
        <h1 className="select-none text-center text-6xl font-black uppercase tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="bg-white bg-clip-text mix-blend-screen">
            Cutout Text
          </span>
        </h1>
      </div>
    </section>
  )
}