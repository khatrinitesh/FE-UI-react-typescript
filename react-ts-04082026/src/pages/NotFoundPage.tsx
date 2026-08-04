import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="w-full max-w-xl text-center"
      >
        <span className="mx-auto grid size-20 place-items-center rounded-3xl bg-blue-500/15 text-blue-400">
          <SearchX size={40} aria-hidden="true" />
        </span>

        <p className="mt-6 text-8xl font-black leading-none text-blue-500 sm:text-9xl">
          404
        </p>

        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">Page not found</h1>

        <p className="mx-auto mt-4 max-w-md leading-7 text-slate-300">
          The page you are looking for does not exist, was removed, or its
          address has changed.
        </p>

        <section className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <ArrowLeft size={18} />
            Go back
          </button>

          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <Home size={18} />
            Home page
          </Link>
        </section>
      </motion.section>
    </main>
  );
}
