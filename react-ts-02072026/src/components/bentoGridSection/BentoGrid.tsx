import { motion } from "framer-motion"
import {
    BarChart3,
    ImageIcon,
    Layers,
    ShieldCheck,
    Sparkles,
    Zap,
} from "lucide-react"

type BentoItem = {
  title: string
  description: string
  icon: React.ElementType
  className: string
}

const bentoItems: BentoItem[] = [
  {
    title: "AI Generation",
    description: "Create high-quality AI images, videos, and campaign assets.",
    icon: Sparkles,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Fast Workflow",
    description: "Generate assets quickly with smooth processing.",
    icon: Zap,
    className: "md:col-span-1",
  },
  {
    title: "Secure Uploads",
    description: "Your files stay protected and safely processed.",
    icon: ShieldCheck,
    className: "md:col-span-1",
  },
  {
    title: "Asset Library",
    description: "Manage images, videos, PDFs, and reusable files.",
    icon: ImageIcon,
    className: "md:col-span-1",
  },
  {
    title: "Analytics",
    description: "Track usage, performance, and engagement reports.",
    icon: BarChart3,
    className: "md:col-span-1",
  },
  {
    title: "Modular System",
    description: "Reusable components built for scale.",
    icon: Layers,
    className: "md:col-span-2",
  },
]

export default function BentoGrid() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
          >
            Features
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-4xl font-bold md:text-6xl"
          >
            Modern Bento Grid
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-400"
          >
            A responsive animated bento layout using React, TypeScript,
            Tailwind CSS, Framer Motion, and Lucide icons.
          </motion.p>
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-4">
          {bentoItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl ${item.className}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute -right-16 -top-16 size-40 rounded-full bg-cyan-400/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300 ring-1 ring-white/15">
                    <Icon className="size-6" />
                  </div>

                  <div>
                    <h3 className="mb-2 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="max-w-md text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}