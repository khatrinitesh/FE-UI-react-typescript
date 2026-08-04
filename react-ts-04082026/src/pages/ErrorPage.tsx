import type { ErrorComponentProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Button } from "../components/ui/Button";

export function ErrorPage({ error, reset }: ErrorComponentProps) {
  const errorMessage =
    error instanceof Error
      ? error.message
      : "An unexpected application error occurred.";

  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-4 py-10 text-white">
      <section className="w-full max-w-xl text-center">
        <span className="mx-auto grid size-20 place-items-center rounded-3xl bg-red-500/15 text-red-400">
          <AlertTriangle size={40} aria-hidden="true" />
        </span>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
          Application error
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          Something went wrong
        </h1>

        <p className="mt-5 leading-7 text-slate-300">
          We could not complete your request. You can try again or return to the
          home page.
        </p>

        {import.meta.env.DEV && (
          <pre className="mt-6 max-h-48 overflow-auto rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-left text-xs leading-5 text-red-200">
            {errorMessage}
          </pre>
        )}

        <section className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button icon={<RefreshCw size={18} />} onClick={reset}>
            Try again
          </Button>

          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            <Home size={18} />
            Home page
          </Link>
        </section>
      </section>
    </main>
  );
}
