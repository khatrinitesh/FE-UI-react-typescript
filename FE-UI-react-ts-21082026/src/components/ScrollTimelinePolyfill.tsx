export default function ScrollTimelinePolyfill() {
  return (
    <>
      <main className="bg-black text-white">
        {/* Scroll Progress */}
        <div className="scroll-progress fixed left-0 top-0 z-50 h-1 w-full" />

        {/* Hero */}
        <section className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <p className="mb-4 text-yellow-400">FRONTEND DEVELOPER</p>

            <h1 className="text-6xl font-bold">My Portfolio</h1>
          </div>
        </section>

        {/* About */}
        <section className="flex min-h-screen items-center justify-center p-10">
          <div className="scroll-card max-w-3xl">
            <h2 className="text-5xl font-bold">About Me</h2>

            <p className="mt-6 text-lg text-zinc-400">
              I build modern React and TypeScript applications with smooth
              animations and responsive interfaces.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="min-h-screen p-10">
          <h2 className="mb-10 text-5xl font-bold">Projects</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {["Project 1", "Project 2", "Project 3"].map((project) => (
              <div
                key={project}
                className="scroll-card rounded-2xl bg-zinc-900 p-10"
              >
                <h3 className="text-2xl font-semibold">{project}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
      <main className="min-h-[200vh] bg-black text-white">
        <div className="scroll-progress" />

        <section className="flex min-h-screen items-center justify-center">
          <h1 className="text-6xl font-bold">Scroll Down</h1>
        </section>

        <section className="flex min-h-screen items-center justify-center">
          <h2 className="text-5xl font-bold">More Content</h2>
        </section>
      </main>
    </>
  );
}
