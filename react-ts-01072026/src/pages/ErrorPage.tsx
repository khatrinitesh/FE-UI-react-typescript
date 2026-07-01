import { Link } from "@tanstack/react-router"

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="mb-3 text-4xl font-bold text-red-600">
          Something went wrong
        </h1>

        <p className="mb-6 text-gray-600">
          Please refresh the page or go back to home.
        </p>

        <Link
          to="/"
          className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage