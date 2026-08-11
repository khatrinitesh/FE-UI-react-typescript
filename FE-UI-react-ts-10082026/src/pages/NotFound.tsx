import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          404
        </p>

        <h1 className="mt-2 text-5xl font-bold">Page Not Found</h1>

        <p className="mt-4 text-gray-500">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-black px-5 py-3 text-white"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
