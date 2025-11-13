import { create } from "zustand";
import type { Species } from "../../interface";

interface SpeciesState {
  species: Species[];
  loading: boolean;
  error: string | null;
  fetchSpecies: () => Promise<void>;
}

export const useSpeciesStore = create<SpeciesState>((set) => ({
  species: [],
  loading: false,
  error: null,
  fetchSpecies: async () => {
    const url = import.meta.env.VITE_API_URL;
    console.log("Fetching from:", url);

    set({ loading: true, error: null });
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json(); // This line will fail if HTML is returned
      set({ species: data, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch species", loading: false });
    }
  },
}));
