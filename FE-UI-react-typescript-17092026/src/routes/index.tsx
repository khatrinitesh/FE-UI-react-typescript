import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto grid min-h-163 max-w-7xl items-center px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">Welcome to School Name</p>
            <h1 className="max-w-2xl text-5xl font-bold leading-tight lg:text-7xl">
              Learning today.
              <br />
              Leading tomorrow.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">Creating an inspiring learning environment where every student can discover, grow, and achieve their potential.</p>

            <div className="mt-8 flex gap-4">
              <Link to="/admissions" className="rounded-md bg-secondary px-6 py-3 font-semibold text-black">
                Apply for Admission
              </Link>

              <Link to="/about" className="rounded-md border border-white/30 px-6 py-3 font-semibold">
                Discover Our School
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">About us</p>
          <h2 className="mt-3 text-4xl font-bold">Education that goes beyond the classroom.</h2>
          <p className="mt-5 leading-7 text-black/60">Our school provides students with strong academics, meaningful experiences, and the confidence needed to succeed in an ever-changing world.</p>
        </div>
      </section>
    </>
  );
}
