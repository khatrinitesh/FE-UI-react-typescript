import { motion } from "framer-motion"

export default function ColorfulText() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="bg-linear-to-r from-red-500 via-purple-500 via-purple-500 to-blue-500 bg-[length:300%_300%] bg-clip-text text-center text-5xl font-black uppercase tracking-tight text-transparent md:text-7xl"
      >
        Frontend Developer
      </motion.h1>
    </div>
  )
}