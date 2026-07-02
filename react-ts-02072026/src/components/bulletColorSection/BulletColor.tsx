import { motion } from "framer-motion"

const points = [
  "React TypeScript setup",
  "TailwindCSS custom bullet color",
  "Framer Motion animation",
  "Clean reusable UI design",
]

export default function BulletColorExample() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-lg"
      >
        <h2 className="mb-5 text-2xl font-bold text-gray-900">
          Features
        </h2>

        <ul className="space-y-3">
          {points.map((point, index) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
              }}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-red-500" />
              <span className="text-base leading-relaxed">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}