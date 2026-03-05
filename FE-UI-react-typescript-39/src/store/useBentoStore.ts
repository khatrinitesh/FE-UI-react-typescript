import { create } from "zustand";

interface BentoState {
  selectedId: number | null;
  select: (id: number) => void;
}

export const useBentoStore = create<BentoState>((set) => ({
  selectedId: null,
  select: (id) => set({ selectedId: id }),
}));
