import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../components/ui/Button";


export function HomePage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 text-center"
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-600">
        Vite + React + TypeScript
      </p>

      <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        Your modern React starter, ready to build on.
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600">
        TanStack Router, Query & Form, Axios,
        Sonner, Tailwind CSS and Framer Motion
        in a clean, reusable structure.
      </p>

      <Link
        to="/products"
        className="mt-8 inline-block"
      >
        <Button
          icon={<FiArrowRight />}
          iconPosition="right"
        >
          Explore products
        </Button>
      </Link>
    </motion.section>
  );
}