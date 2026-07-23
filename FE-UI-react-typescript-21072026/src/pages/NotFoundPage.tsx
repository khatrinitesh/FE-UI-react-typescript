import { Link } from "@tanstack/react-router";
import { ArrowLeft, Home } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/common/Button";


export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl text-center"
      >
        <p className="text-8xl font-black text-blue-600 sm:text-9xl">
          404
        </p>

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-slate-600">
          The page you are looking for may have been removed,
          renamed or does not exist.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            variant="outline"
            leftIcon={<ArrowLeft size={18} />}
            onClick={() => window.history.back()}
          >
            Go back
          </Button>

          <Link to="/">
            <Button leftIcon={<Home size={18} />}>
              Go home
            </Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}