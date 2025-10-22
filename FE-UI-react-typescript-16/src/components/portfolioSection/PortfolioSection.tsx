import { useState } from "react";
import { portfolioData } from "../../constants/PortfolioItem";
import type { PortfolioItem } from "../../interface";

const PortfolioSection = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "React", "HTML", "Dashboard"];

  const filtered =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
      <div className="mb-6 space-x-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="px-4 py-2 border rounded"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {filtered.map((item: PortfolioItem) => (
          <div
            key={item.id}
            className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center flex-col p-2"
          >
            <img src={item.image} alt={item.title} className="rounded mb-2" />
            <p className="font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
