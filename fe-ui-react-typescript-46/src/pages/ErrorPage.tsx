import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50 text-center p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        Something went wrong
      </h1>

      <p className="text-gray-600 mb-6">
        An unexpected error occurred in the application.
      </p>

      <Link to="/" className="bg-red-600 text-white px-6 py-3 rounded-lg">
        Go Home
      </Link>
    </div>
  );
}
