import { create } from "zustand";
import type { PortfolioItem } from "../interface";
import { portfolio } from "../components/StickyScrollReveal/constants";

interface PortfolioState {
  projects: PortfolioItem[];
  filter: { type?: string; year?: number };
  setFilter: (filter: Partial<PortfolioState["filter"]>) => void;
  filteredProjects: () => PortfolioItem[];
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  projects: portfolio,
  filter: {},
  setFilter: (filter) => set({ filter }),
  filteredProjects: () => {
    const { projects, filter } = get();
    return projects.filter((p) => {
      const typeMatch = filter.type ? p.type === filter.type : true;
      const yearMatch = filter.year ? p.year === filter.year : true;
      return typeMatch && yearMatch;
    });
  },
}));
