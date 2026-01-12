import { create } from "zustand";
import type { Service } from "../interface";
import { API_PATHS } from "../api/endpoints";
import { apiRequest } from "../api/apiClient";

interface ServiceState {
  services: Service[];
  selectedService: Service | null;
  fetchServices: () => Promise<void>;
  fetchServiceById: (id: string) => Promise<void>;
}

export const useServiceStore = create<ServiceState>((set) => ({
  services: [],
  selectedService: null,

  fetchServices: async () => {
    const data = await apiRequest<Service[]>(API_PATHS.SERVICES);
    set({ services: data });
  },

  fetchServiceById: async (id: string) => {
    const data = await apiRequest<Service>(API_PATHS.SERVICE_DETAIL(id));
    set({ selectedService: data });
  },
}));
