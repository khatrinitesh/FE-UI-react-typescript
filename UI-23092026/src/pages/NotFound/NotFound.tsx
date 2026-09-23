import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

        <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>

        <Link to="/" className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
