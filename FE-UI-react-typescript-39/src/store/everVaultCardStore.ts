import { create } from "zustand";

interface CardStore {
  activeCard: number | null;
  setActiveCard: (id: number | null) => void;
}

export const everVaultCardStore = create<CardStore>((set) => ({
  activeCard: null,
  setActiveCard: (id) => set({ activeCard: id }),
}));
