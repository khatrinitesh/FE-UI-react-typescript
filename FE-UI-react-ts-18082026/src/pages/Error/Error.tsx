import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 text-center">
      <div>
        <h1 className="text-5xl font-bold">Something went wrong</h1>

        <p className="mb-6 mt-4 text-gray-500">Please try again later.</p>

        <Link to="/" className="rounded-lg bg-black px-6 py-3 text-white">
          Go Home
        </Link>
      </div>
    </section>
  );
}
