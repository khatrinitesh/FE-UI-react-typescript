import { motion } from 'framer-motion'

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container-page py-20"
    >
      <p className="text-indigo-600">About</p>
      <h1 className="mt-2 text-5xl font-black">Built for maintainability.</h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600">
        The project separates pages, layouts, state, services, constants, assets,
        reusable fields, and route configuration.
      </p>
    </motion.div>
  )
}
