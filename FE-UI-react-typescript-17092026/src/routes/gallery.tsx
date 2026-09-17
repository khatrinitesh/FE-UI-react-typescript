import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">Gallery</p>
          <h1 className="text-5xl font-bold">Life at our school</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">A glimpse into classrooms, sports, and everyday moments.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex aspect-video items-center justify-center rounded-lg bg-primary/10 text-lg font-semibold text-primary">Classroom</div>

          <div className="flex aspect-video items-center justify-center rounded-lg bg-primary/10 text-lg font-semibold text-primary">Sports Day</div>

          <div className="flex aspect-video items-center justify-center rounded-lg bg-primary/10 text-lg font-semibold text-primary">Science Fair</div>

          <div className="flex aspect-video items-center justify-center rounded-lg bg-primary/10 text-lg font-semibold text-primary">Music Recital</div>

          <div className="flex aspect-video items-center justify-center rounded-lg bg-primary/10 text-lg font-semibold text-primary">Library</div>

          <div className="flex aspect-video items-center justify-center rounded-lg bg-primary/10 text-lg font-semibold text-primary">Graduation</div>
        </div>

        <Link to="/admissions" className="mt-10 inline-block rounded-md bg-primary px-6 py-3 font-medium text-white">
          Join our community
        </Link>
      </section>
    </>
  );
}
