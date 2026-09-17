import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/facilities")({
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">Facilities</p>
          <h1 className="text-5xl font-bold">Our campus facilities</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">Modern spaces designed to support learning, safety, and wellbeing.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Science Laboratories</h2>
            <p className="mt-3 leading-7 text-black/60">Fully equipped labs for physics, chemistry, and biology.</p>
          </div>

          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Library</h2>
            <p className="mt-3 leading-7 text-black/60">A quiet space with thousands of books and digital resources.</p>
          </div>

          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Sports Grounds</h2>
            <p className="mt-3 leading-7 text-black/60">Playing fields and courts for football, athletics, and more.</p>
          </div>

          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Computer Rooms</h2>
            <p className="mt-3 leading-7 text-black/60">Modern computer suites supporting IT and digital literacy.</p>
          </div>

          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Auditorium</h2>
            <p className="mt-3 leading-7 text-black/60">A large hall for assemblies, performances, and events.</p>
          </div>

          <div className="rounded-lg border border-black/10 p-6">
            <h2 className="text-xl font-bold">Cafeteria</h2>
            <p className="mt-3 leading-7 text-black/60">Nutritious meals served daily in a clean, welcoming space.</p>
          </div>
        </div>

        <Link to="/contact" className="mt-10 inline-block rounded-md bg-primary px-6 py-3 font-medium text-white">
          Book a visit
        </Link>
      </section>
    </>
  );
}