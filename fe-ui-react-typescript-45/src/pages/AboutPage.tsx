import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          About
        </p>

        <h1 className="mt-4 text-5xl font-black">About This Template</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          This starter is built for clean frontend projects using React,
          TypeScript, Zustand, TanStack Router, Framer Motion and TailwindCSS.
          It keeps constants, interfaces, store and UI separated properly.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            "Reusable folder structure",
            "Typed global Zustand store",
            "Animated route pages",
            "Clean TailwindCSS components",
          ].map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-bold">{text}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
