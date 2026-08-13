import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-md text-center">
        <p className="text-8xl font-bold tracking-tight text-gray-900">404</p>

        <h1 className="mt-6 text-2xl font-semibold text-gray-900">
          Page not found
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-8">
          <Link
            to="/"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              rounded-lg
              bg-black
              px-6
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-gray-800
              focus:outline-none
              focus:ring-2
              focus:ring-black
              focus:ring-offset-2
            "
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
