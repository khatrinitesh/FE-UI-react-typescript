import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/error")({
  component: ErrorPage,
});

function ErrorPage() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-2xl"
    >
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
        <AlertTriangle className="h-12 w-12 text-red-600" />
      </div>

      <h1 className="mt-8 text-4xl font-bold text-gray-800">Oops!</h1>

      <h2 className="mt-2 text-2xl font-semibold text-red-600">
        Something went wrong
      </h2>

      <p className="mt-4 text-gray-600">
        An unexpected error occurred while loading this page. Please try again
        or return to the homepage.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <button
          onClick={handleRefresh}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          <RefreshCw size={18} />
          Try Again
        </button>

        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Back Home
        </Link>
      </div>

      <p className="mt-8 text-sm text-gray-400">Error Code: 500</p>
    </motion.div>
  );
}
