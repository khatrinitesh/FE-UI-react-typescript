import { motion } from "framer-motion";
import ArrayMethodsExample from "../components/JsReference/ArrayMethodsExample";
import PageWrapper from "../components/PageWrapper";
import { SITE_CONFIG } from "../constants/constants";

export default function HomePage() {
  return (
    <PageWrapper>
      <section className="mx-auto flex max-w-6xl flex-col items-center justify-center text-center">
        <ArrayMethodsExample />
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300"
        >
          React TypeScript Starter
        </motion.div>

        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Build modern websites with{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            clean animated UI
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
          {SITE_CONFIG.tagline}
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300">
            Get Started
          </button>

          <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>

        <div className="mt-20 grid w-full grid-cols-1 gap-5 md:grid-cols-3">
          {["Zustand Store", "TanStack Router", "Framer Motion"].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left shadow-2xl shadow-cyan-500/5"
            >
              <h3 className="text-xl font-bold">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Production-friendly setup with TypeScript interfaces, constants,
                reusable UI and smooth page animation.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
