import { Link } from "react-router"

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-5">
      <div className="text-center">
        <p className="text-sm font-semibold text-zinc-500">
          404
        </p>

        <h1 className="mt-3 text-5xl font-semibold tracking-tight">
          Page not found
        </h1>

        <p className="mt-5 text-zinc-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-black px-6 py-3 text-sm font-medium text-white"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}