import { Link } from "react-router";

export default function Home() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="mx-auto w-full max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Welcome to MyStore
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Discover products you will love.
          </h1>

          <p className="mb-8 text-lg text-gray-500">
            Explore our collection of products built using React, TypeScript and
            a REST API.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-lg bg-black px-6 py-3 font-semibold text-white"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
