import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-extrabold mb-6">404</h1>
      <p className="text-2xl mb-4">Oops! Page Not Found.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
