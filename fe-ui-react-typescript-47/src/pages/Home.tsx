import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold tracking-tight text-gray-950"
      >
        Welcome to MyApp
      </motion.h1>

      <p className="mt-4 max-w-xl text-gray-600">
        A clean React TypeScript starter with routing, layouts, validation,
        reusable components, animations, toast, and TanStack Query.
      </p>

      <div className="mt-8">
        <Button color1="#111827" color2="#ffffff">
          Get Started
        </Button>
      </div>
    </section>
  );
}
