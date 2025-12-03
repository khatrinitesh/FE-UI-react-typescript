import { create } from "zustand";

interface BentoState {
  selectedId: number | null;
  setSelected: (id: number) => void;
}

export const useBentoStore = create<BentoState>((set) => ({
  selectedId: null,
  setSelected: (id) => set({ selectedId: id }),
}));
