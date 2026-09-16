import { useState } from "react";
import { Search, ArrowRight, Heart, Star, Sparkles, X } from "lucide-react";

import "./Animation.css";

interface Product {
  id: number;
  name: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "React Development",
    category: "Frontend",
  },
  {
    id: 2,
    name: "TypeScript Course",
    category: "Programming",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    category: "CSS",
  },
  {
    id: 4,
    name: "Framer Motion",
    category: "Animation",
  },
  {
    id: 5,
    name: "UI Design",
    category: "Design",
  },
];

const Animation = () => {
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState(false);

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <main className="animation-page">
      {/* Header */}

      <section className="animation-heading">
        <span className="animation-label">REACT COMPONENT</span>

        <h1>Animations</h1>

        <p>Animated buttons and an interactive animated search component.</p>
      </section>

      {/* ================================
          ANIMATED BUTTONS
      ================================= */}

      <section className="animation-section">
        <h2 className="section-title">Animated Buttons</h2>

        <div className="button-container">
          {/* Button 1 */}

          <button className="animated-button primary-button">
            <span>Get Started</span>

            <ArrowRight size={18} className="button-arrow" />
          </button>

          {/* Button 2 */}

          <button className="animated-button gradient-button">
            <Sparkles size={18} />

            <span>Explore</span>
          </button>

          {/* Button 3 */}

          <button className="animated-button outline-button">
            <span>Learn More</span>
          </button>

          {/* Button 4 */}

          <button
            type="button"
            className={`animated-button heart-button ${liked ? "liked" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            <Heart size={20} fill={liked ? "currentColor" : "none"} />

            <span>{liked ? "Liked" : "Like"}</span>
          </button>

          {/* Button 5 */}

          <button className="animated-button star-button">
            <Star size={18} />

            <span>Rate Us</span>
          </button>
        </div>
      </section>

      {/* ================================
          ANIMATED SEARCH
      ================================= */}

      <section className="animation-section">
        <h2 className="section-title">Animated Search</h2>

        <div className="search-container">
          <div className="animated-search">
            <Search size={21} className="search-icon" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products..."
            />

            {search && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}
          </div>
        </div>

        {/* Search Result */}

        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="search-result">
                <div>
                  <h3>{product.name}</h3>

                  <span>{product.category}</span>
                </div>

                <ArrowRight size={18} className="result-arrow" />
              </div>
            ))
          ) : (
            <div className="no-results">No results found.</div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Animation;
