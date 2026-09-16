import {
  ArrowUpRight,
  Code2,
  Globe,
  Layers3,
  Palette,
  Sparkles,
  Zap,
} from "lucide-react";

import "./BentoGrid.css";

interface BentoItem {
  id: number;
  title: string;
  description: string;
  type: string;
}

const bentoItems: BentoItem[] = [
  {
    id: 1,
    title: "Build Beautiful Interfaces",
    description:
      "Create modern and responsive user interfaces with React and TypeScript.",
    type: "featured",
  },
  {
    id: 2,
    title: "React",
    description: "Component based UI development.",
    type: "react",
  },
  {
    id: 3,
    title: "Design System",
    description: "Reusable components and consistent design.",
    type: "design",
  },
  {
    id: 4,
    title: "Performance",
    description: "Fast and optimized applications.",
    type: "performance",
  },
  {
    id: 5,
    title: "Global Experience",
    description: "Build experiences for everyone.",
    type: "global",
  },
  {
    id: 6,
    title: "Creative Development",
    description: "Combine design, animation and technology.",
    type: "creative",
  },
];

const BentoGrid = () => {
  return (
    <main className="bento-page">
      <section className="bento-container">
        {/* Heading */}

        <div className="bento-heading">
          <span>BENTO COMPONENT</span>
          <h1>
            Build Something
            <strong> Amazing</strong>
          </h1>
          <p>
            A responsive bento grid layout for modern websites, dashboards and
            portfolios.
          </p>
        </div>

        {/* Grid */}

        <div className="bento-grid">
          {/* Featured */}
          <article className="bento-card bento-featured">
            <div className="bento-glow" />
            <div className="bento-card-content">
              <div className="bento-icon">
                <Sparkles size={26} />
              </div>
              <span className="bento-label">FEATURED</span>
              <h2>{bentoItems[0].title}</h2>

              <p>{bentoItems[0].description}</p>
              <button type="button" className="bento-link">
                Explore
                <ArrowUpRight size={17} />
              </button>
            </div>
          </article>

          {/* React */}
          <article className="bento-card bento-react">
            <div className="bento-top">
              <div className="bento-icon react-icon">
                <Code2 size={25} />
              </div>
              <ArrowUpRight className="bento-arrow" size={20} />
            </div>
            <div>
              <h3>{bentoItems[1].title}</h3>
              <p>{bentoItems[1].description}</p>
            </div>

            <div className="bento-react-circle">R</div>
          </article>

          {/* Design */}
          <article className="bento-card bento-design">
            <div className="bento-top">
              <div className="bento-icon">
                <Palette size={25} />
              </div>
              <ArrowUpRight className="bento-arrow" size={20} />
            </div>

            <div>
              <h3>{bentoItems[2].title}</h3>
              <p>{bentoItems[2].description}</p>
            </div>

            <div className="design-shapes">
              <span />
              <span />
              <span />
            </div>
          </article>

          {/* Performance */}

          <article className="bento-card bento-performance">
            <div className="bento-top">
              <div className="bento-icon">
                <Zap size={25} />
              </div>

              <span className="speed-value">99%</span>
            </div>

            <div>
              <h3>{bentoItems[3].title}</h3>

              <p>{bentoItems[3].description}</p>
            </div>

            <div className="performance-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </article>

          {/* Global */}

          <article className="bento-card bento-global">
            <div className="global-globe">
              <Globe size={100} strokeWidth={1} />
            </div>

            <div className="bento-top relative z-10">
              <div className="bento-icon">
                <Globe size={25} />
              </div>

              <ArrowUpRight className="bento-arrow" size={20} />
            </div>

            <div className="relative z-10">
              <h3>{bentoItems[4].title}</h3>

              <p>{bentoItems[4].description}</p>
            </div>
          </article>

          {/* Creative */}

          <article className="bento-card bento-creative">
            <div className="bento-top">
              <div className="bento-icon">
                <Layers3 size={25} />
              </div>

              <ArrowUpRight className="bento-arrow" size={20} />
            </div>

            <div>
              <h3>{bentoItems[5].title}</h3>

              <p>{bentoItems[5].description}</p>
            </div>

            <div className="creative-orbit">
              <span />
              <span />
              <span />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default BentoGrid;
