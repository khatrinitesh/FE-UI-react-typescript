import { useInView } from "react-intersection-observer";

export default function ReactIntersectionObserver() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <>
      <section
        ref={ref}
        className={`
        min-h-screen p-10
        transition-all duration-700 ease-out
        ${inView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
      `}
      >
        <h2 className="text-5xl font-bold">Skills</h2>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["React", "TypeScript", "Tailwind", "Node.js"].map((skill) => (
            <div key={skill} className="rounded-xl bg-zinc-900 p-8">
              {skill}
            </div>
          ))}
        </div>
      </section>
      <main className="min-h-screen bg-black text-white">
        <section
          ref={ref}
          className={`
          flex min-h-screen items-center justify-center
          transition-all duration-1000
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        >
          <h1 className="text-5xl font-bold">
            {inView ? "Section Visible" : "Scroll Down"}
          </h1>
        </section>
      </main>
    </>
  );
}
