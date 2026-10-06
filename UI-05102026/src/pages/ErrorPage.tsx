import { Link } from "react-router"

export default function ErrorPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-5 text-white">
      <div className="max-w-lg text-center">
        <p className="text-sm text-zinc-400">
          Something went wrong
        </p>

        <h1 className="mt-4 text-4xl font-semibold">
          An unexpected error occurred.
        </h1>

        <p className="mt-5 text-zinc-400">
          Please try again or return to the homepage.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-medium text-black"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}