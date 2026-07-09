import { Link } from "@tanstack/react-router"
import { AlertTriangle, Home, RefreshCcw } from "lucide-react"
import Button from "../components/ui/Button"

type ErrorBoundaryPageProps = {
  error?: Error
  reset?: () => void
}

export default function ErrorBoundaryPage({
  error,
  reset,
}: ErrorBoundaryPageProps) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-red-50 px-5">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertTriangle size={30} />
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
          Something went wrong
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          An unexpected error occurred. Please refresh the page or go back to
          the homepage.
        </p>

        {error?.message && (
          <pre className="mt-6 max-h-40 overflow-auto rounded-xl bg-slate-100 p-4 text-left text-sm text-red-600">
            {error.message}
          </pre>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {reset && (
            <Button
              type="button"
              onClick={reset}
              leftIcon={<RefreshCcw size={18} />}
              className="bg-red-600 hover:bg-red-700"
            >
              Try Again
            </Button>
          )}

          <Link to="/">
            <Button
              leftIcon={<Home size={18} />}
              className="w-full bg-slate-950 hover:bg-slate-800 sm:w-auto"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}