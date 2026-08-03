import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { ArrowRight, Code2, Rocket, ShieldCheck, Users } from "lucide-react";

const technologies = [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "TanStack Router",
  "TanStack Query",
  "TanStack Form",
  "Axios",
  "Framer Motion",
  "Zod",
];

const features = [
  {
    icon: <Rocket className="h-10 w-10 text-indigo-600" />,
    title: "Fast Performance",
    description:
      "Powered by Vite for lightning-fast builds and instant hot module replacement.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
    title: "Production Ready",
    description:
      "Well-structured architecture with routing, API handling, forms, and validation.",
  },
  {
    icon: <Users className="h-10 w-10 text-pink-600" />,
    title: "Developer Friendly",
    description:
      "Easy-to-maintain folder structure and reusable components for scalable applications.",
  },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-600 via-violet-600 to-purple-700 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold md:text-6xl">
              About Our Project
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-100">
              A modern React starter template designed for building scalable,
              responsive, and production-ready web applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-4xl font-bold text-gray-800">
              Why This Starter?
            </h2>

            <p className="mb-6 text-gray-600">
              This boilerplate helps developers kickstart new React projects
              without spending time configuring routing, API integration,
              validation, state management, and responsive layouts.
            </p>

            <p className="text-gray-600">
              Everything is organized into reusable folders and components,
              making the project clean, maintainable, and easy to scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-10 shadow-lg"
          >
            <Code2 className="mb-6 h-16 w-16 text-indigo-600" />

            <h3 className="mb-4 text-2xl font-bold">
              Modern Development Stack
            </h3>

            <p className="text-gray-600">
              Built with the latest React ecosystem and best development
              practices to improve productivity and code quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800">Key Features</h2>

            <p className="mt-4 text-gray-600">
              Everything you need to build modern web applications.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-gray-50 p-8 shadow-sm"
              >
                {item.icon}

                <h3 className="mt-5 mb-3 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-10 text-4xl font-bold text-gray-800">
              Technologies Used
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-indigo-100 px-5 py-3 text-sm font-semibold text-indigo-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-24 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-bold">Start Building Today</h2>

          <p className="mx-auto mt-5 max-w-2xl text-indigo-100">
            Explore the project structure, create reusable components, and build
            scalable React applications with confidence.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-indigo-600 transition hover:bg-gray-100"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </section>
  );
}
