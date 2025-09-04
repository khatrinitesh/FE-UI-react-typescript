import { create } from "zustand";
import type { IService } from "../../interface";
import { fetchServiceById, fetchServices } from "../../api/serviceApi";

interface ServiceStore {
  services: IService[];
  selectedService?: IService;
  loading: boolean;
  loadServices: () => void;
  loadServiceById: (id: string) => void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
  services: [],
  selectedService: undefined,
  loading: false,

  loadServices: async () => {
    set({ loading: true });
    const data = await fetchServices();
    set({ services: data, loading: false });
  },

  loadServiceById: async (id: string) => {
    set({ loading: true });
    const data = await fetchServiceById(id);
    set({ selectedService: data, loading: false });
  },
}));
