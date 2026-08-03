import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Home, SearchX } from "lucide-react";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl rounded-2xl bg-white p-10 text-center shadow-xl"
      >
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
          <SearchX className="h-12 w-12 text-indigo-600" />
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-7xl font-extrabold text-indigo-600">404</h1>

        <h2 className="mt-3 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          Sorry, the page you're looking for doesn't exist, has been moved, or
          the URL is incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mt-8 border-t pt-6">
          <p className="text-sm text-gray-400">
            Error Code: <span className="font-semibold">404</span>
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;
