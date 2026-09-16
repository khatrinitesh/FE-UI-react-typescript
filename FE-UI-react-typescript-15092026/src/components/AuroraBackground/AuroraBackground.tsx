import "./AuroraBackground.css";

const AuroraBackground = () => {
  return (
    <main className="aurora-page">
      {/* Aurora lights */}
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="aurora aurora-4" />

      {/* Content */}
      <section className="aurora-content">
        <span className="aurora-badge">REACT ANIMATION</span>

        <h1>
          Aurora
          <span> Background</span>
        </h1>

        <p>
          A beautiful animated aurora background created with React, TypeScript,
          Tailwind CSS and pure CSS animation.
        </p>

        <div className="aurora-buttons">
          <button className="aurora-button primary">Get Started</button>

          <button className="aurora-button secondary">Explore More</button>
        </div>
      </section>
    </main>
  );
};

export default AuroraBackground;
