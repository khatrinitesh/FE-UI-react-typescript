import { create } from "zustand";

interface VortexStore {
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

export const useVortexStore = create<VortexStore>((set) => ({
  activeId: null,
  setActiveId: (id) => set({ activeId: id }),
}));
