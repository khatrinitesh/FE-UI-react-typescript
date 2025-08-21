import { create } from "zustand";
import type { Service } from "../interface";
import axios from "axios";

interface ServiceState {
  services: Service[];
  loading: boolean;
  fetchServices: () => Promise<void>;
}

export const useServiceStore = create<ServiceState>((set) => ({
  services: [],
  loading: false,
  fetchServices: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = Array.isArray(res.data) ? res.data : [];
      set({ services: data, loading: false });
    } catch (err) {
      console.error("Error fetching services", err);
      set({ services: [], loading: false });
    }
  },
}));
