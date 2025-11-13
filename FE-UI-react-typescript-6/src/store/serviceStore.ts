import { create } from "zustand";
import type { Service } from "../interface";
import axios from "axios";

interface ServiceState {
  services: Service[];
  loading: boolean;
  error: string | null;
  fetchServices: () => Promise<void>;
}

export const useServiceStore = create<ServiceState>((set) => ({
  services: [],
  loading: false,
  error: null,

  fetchServices: async () => {
    set({ loading: true, error: null });

    try {
      const res = await axios.get(import.meta.env.VITE_API_URL);
      console.log("API response:", res.data); // ✅ Add this to inspect the real shape

      // Adjust this based on actual response structure
      const rawData = res.data;
      const data: Service[] = Array.isArray(rawData)
        ? rawData
        : Array.isArray(rawData.services)
        ? rawData.services
        : [];

      if (data.length === 0) {
        console.warn("No services returned from API.");
        set({ services: [], loading: false });
        return;
      }

      set({ services: data, loading: false });
    } catch (err) {
      console.error("Error fetching services", err);
      set({
        services: [],
        loading: false,
        error: "Failed to fetch services. Please try again later.",
      });
    }
  },
}));
