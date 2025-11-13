import { usePortfolioStore } from "../../store/usePortfolioStore";
import "./style.css";

const StickyScrollReveal = () => {
  const { setFilter, filteredProjects } = usePortfolioStore();
  const projects = filteredProjects();
  return (
    <section className="portfolio">
      <div className="filters">
        <button onClick={() => setFilter({})}>All</button>
        <button onClick={() => setFilter({ type: "web" })}>Web</button>
        <button onClick={() => setFilter({ type: "mobile" })}>Mobile</button>
        <button onClick={() => setFilter({ type: "design" })}>Design</button>
        <button onClick={() => setFilter({ year: 2024 })}>2024</button>
      </div>

      <div className="projects">
        {projects.map((p) => (
          <div key={p.id} className="project reveal">
            <h3>{p.name}</h3>
            <p>Type: {p.type}</p>
            <p>Year: {p.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StickyScrollReveal;
