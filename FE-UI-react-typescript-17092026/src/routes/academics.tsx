import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/academics")({
  component: AcademicsPage,
});

function AcademicsPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">Academics</p>
          <h1 className="text-5xl font-bold">Our academic programmes</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">A strong, well-rounded curriculum designed to help every student succeed.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Primary School</h2>
            <p className="mt-3 leading-7 text-black/60">Building strong foundations in literacy, numeracy, and curiosity-driven learning.</p>
          </div>

          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Secondary School</h2>
            <p className="mt-3 leading-7 text-black/60">Challenging coursework that prepares students for national and international qualifications.</p>
          </div>

          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Extracurricular</h2>
            <p className="mt-3 leading-7 text-black/60">Sports, arts, and clubs that develop leadership and creativity beyond the classroom.</p>
          </div>
        </div>

        <Link to="/admissions" className="mt-10 inline-block rounded-md bg-primary px-6 py-3 font-medium text-white">
          Apply for admission
        </Link>
      </section>
    </>
  );
}