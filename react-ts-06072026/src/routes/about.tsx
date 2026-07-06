import { motion } from "framer-motion";
import {
  Code2,
  Laptop,
  ShieldCheck,
} from "lucide-react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10"
    >
      <div>

        <h1 className="text-4xl font-bold mb-4">
          About Us
        </h1>

        <p className="text-gray-600 leading-8">
          This project demonstrates a scalable React architecture
          using modern libraries including TanStack Router,
          TanStack Query, TailwindCSS, Framer Motion
          and reusable UI components.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="rounded-xl shadow p-8">

          <Laptop
            className="text-indigo-600 mb-4"
            size={40}
          />

          <h2 className="font-bold text-xl mb-3">
            Modern Stack
          </h2>

          <p className="text-gray-500">
            Built using React 19, Vite and TypeScript.
          </p>

        </div>

        <div className="rounded-xl shadow p-8">

          <Code2
            className="text-green-600 mb-4"
            size={40}
          />

          <h2 className="font-bold text-xl mb-3">
            Clean Code
          </h2>

          <p className="text-gray-500">
            Modular reusable folder structure with best practices.
          </p>

        </div>

        <div className="rounded-xl shadow p-8">

          <ShieldCheck
            className="text-red-500 mb-4"
            size={40}
          />

          <h2 className="font-bold text-xl mb-3">
            Production Ready
          </h2>

          <p className="text-gray-500">
            Easy to scale for enterprise applications.
          </p>

        </div>

      </div>

    </motion.section>
  );
};
