import { motion } from "framer-motion"

interface ScrollItem {
  id: number
  title: string
  description: string
}

const items: ScrollItem[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Build modern user interfaces using React, TypeScript and Tailwind CSS.",
  },
  {
    id: 2,
    title: "React Components",
    description:
      "Create reusable UI components with clean props and strong typing.",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    description:
      "Style applications quickly using utility-first CSS classes.",
  },
  {
    id: 4,
    title: "Framer Motion",
    description:
      "Add smooth animations and transitions to React applications.",
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Fetch and display data from REST APIs using clean service files.",
  },
  {
    id: 6,
    title: "State Management",
    description:
      "Manage global state using tools like Zustand or Redux.",
  },
  {
    id: 7,
    title: "Performance",
    description:
      "Optimize React apps using lazy loading, memoization and best practices.",
  },
]

export default function CustomScrollbar() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-4 px-2">
          <h1 className="text-2xl font-bold text-white">
            Custom Circle Scrollbar
          </h1>

          <p className="mt-1 text-sm text-slate-300">
            React TypeScript Tailwind CSS Framer Motion
          </p>
        </div>

        <div className="custom-circle-scrollbar h-105 space-y-4 overflow-y-auto pr-4">
          {items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              className="rounded-2xl border border-white/10 bg-white/10 p-5 transition-colors hover:bg-white/15"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Item {item.id}
              </span>

              <h2 className="mt-2 text-lg font-bold text-white">
                {item.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}