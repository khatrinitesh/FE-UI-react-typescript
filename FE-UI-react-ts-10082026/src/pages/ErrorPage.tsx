import { Link } from "@tanstack/react-router";

interface ErrorPageProps {
  error?: unknown;
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  const message =
    error instanceof Error ? error.message : "Something went wrong.";

  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <section className="text-center">
        <h1 className="text-5xl font-bold">Something went wrong</h1>

        <p className="mt-4 text-gray-500">{message}</p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-lg bg-black px-5 py-3 text-white"
        >
          Go Home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
