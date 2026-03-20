import { Link } from "react-router";
import { PATHS } from "../../routes/path";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* 404 Title */}
      <h1 className="text-6xl font-bold text-black">404</h1>

      {/* Message */}
      <p className="text-lg mt-4 text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>

      {/* Description */}
      <p className="text-sm text-gray-400 mt-2 max-w-md">
        It might have been removed, renamed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link
        to={PATHS.HOME}
        className="mt-6 inline-block bg-black text-white px-6 py-2 rounded hover:opacity-80 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
