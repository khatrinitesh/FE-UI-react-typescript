import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold text-gray-950">About Us</h1>

        <p className="mt-4 text-gray-600">
          This is the About page. You can use this section to describe your
          product, company, or project.
        </p>
      </motion.div>
    </section>
  );
}
