import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-6">
      <h1 className="text-7xl font-bold mb-4">404</h1>

      <p className="text-xl text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="bg-black text-white px-6 py-3 rounded-lg">
        Back to Home
      </Link>
    </div>
  );
}
