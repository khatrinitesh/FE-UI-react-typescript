import { Link } from "@tanstack/react-router"

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="mb-3 text-6xl font-bold text-red-600">404</h1>

        <p className="mb-6 text-lg text-gray-600">Page not found</p>

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

export default NotFound