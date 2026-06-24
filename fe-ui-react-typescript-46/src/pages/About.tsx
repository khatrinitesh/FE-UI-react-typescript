import { motion } from "framer-motion";
import type { PageInfo } from "../interfaces/common.interface";

const aboutInfo: PageInfo = {
  title: "About Us",
  description:
    "We are learning React TypeScript with proper folder structure, layouts, reusable constants, interfaces, and animations.",
};

export default function About() {
  return (
    <section className="p-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl font-bold mb-4">{aboutInfo.title}</h1>
        <p className="text-gray-600 text-lg">{aboutInfo.description}</p>
      </motion.div>
    </section>
  );
}
