
import { createFileRoute } from "@tanstack/react-router"
import { motion } from "framer-motion"
import Button from "../components/ui/Button"

export const Route = createFileRoute("/")({
  component: HomePage,
})

function HomePage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-140px)] items-center  py-12">
      <div className="container">
      <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">
          React TypeScript App
        </p>

        <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          Home Page
        </h1>

        <p className="mb-8 text-lg text-slate-600">
          React TypeScript, Tailwind CSS, Framer Motion, Sonner, TanStack
          Router, Query and Form setup.
        </p>

        <Button variant="color1">Get Started</Button>
      </motion.div>
      </div>
    </section>
  )
}