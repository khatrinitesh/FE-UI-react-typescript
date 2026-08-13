import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="text-center">
        <h1 className="text-7xl font-bold">404</h1>

        <p className="mt-4">Page not found.</p>

        <Link to="/" className="mt-6 inline-block underline">
          Go to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
