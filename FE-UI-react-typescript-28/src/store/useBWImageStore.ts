import { create } from "zustand";

interface BWImageState {
  selectedId: number | null;
  setSelected: (id: number) => void;
}

export const useBWImageStore = create<BWImageState>((set) => ({
  selectedId: null,
  setSelected: (id) => set({ selectedId: id }),
}));
