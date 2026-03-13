import { create } from "zustand";

interface FadingButtonStore {
  active: number | null;
  setActive: (id: number | null) => void;
}

export const useFadingButtonsStore = create<FadingButtonStore>((set) => ({
  active: null,
  setActive: (id) => set({ active: id }),
}));
