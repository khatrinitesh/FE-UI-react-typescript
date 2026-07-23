import { useRouter } from "@tanstack/react-router";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../components/common/Button";



interface ErrorPageProps {
  error?: Error;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg text-center"
      >
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-red-500/10 text-red-400">
          <AlertTriangle size={38} />
        </div>

        <p className="mt-6 text-sm font-semibold tracking-widest text-red-400 uppercase">
          Application error
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-4 text-slate-400">
          {error?.message ||
            "An unexpected application error occurred."}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            leftIcon={<RotateCcw size={18} />}
            onClick={() => window.location.reload()}
          >
            Reload page
          </Button>

          <Button
            variant="outline"
            leftIcon={<Home size={18} />}
            onClick={() => router.navigate({ to: "/" })}
          >
            Go home
          </Button>
        </div>
      </motion.div>
    </main>
  );
}