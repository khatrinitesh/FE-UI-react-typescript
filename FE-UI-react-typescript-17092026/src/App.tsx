function App() {
  return (
    <>
      <main className="mx-auto max-w-7xl w-full bg-gray-300 px-4 py-20">
        <p className="text-small text-primary">Welcome to our school</p>
        <h1 className="text-hero mt-3">Building brighter futures</h1>
        <p className="text-body-lg mt-6 max-w-2xl text-muted">We provide a modern learning environment designed to help every student grow academically and personally.</p>
        <section className="mt-20">
          <h2 className="text-section">Our Academics</h2>
          <h3 className="text-sub mt-8">Learning programs</h3>
          <div className="mt-6">
            <h4 className="text-card">Primary Education</h4>
            <p className="text-body mt-2 text-muted">Strong foundations for young learners.</p>
            <p className="text-caption mt-3 text-muted">Classes 1–5</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
