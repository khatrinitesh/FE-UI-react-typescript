import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admissions")({
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">Admissions</p>
          <h1 className="text-5xl font-bold">Join our school</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">We are excited that you are considering our school. Follow the steps below to apply for admission.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl font-bold">How to apply</h2>

        <ol className="mt-8 list-decimal space-y-4 pl-5 text-black/70">
          <li>Complete the online application form.</li>
          <li>Submit your previous school records.</li>
          <li>Schedule an interview with our admissions team.</li>
          <li>Receive your admission decision.</li>
        </ol>

        <div className="mt-10 flex gap-4">
          <Link to="/contact" className="rounded-md bg-primary px-6 py-3 font-medium text-white">
            Contact us
          </Link>

          <Link to="/" className="rounded-md border border-black/20 px-6 py-3 font-medium">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}