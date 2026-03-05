import { create } from "zustand";

interface CardState {
  selectedId: number | null;
  select: (id: number) => void;
}

export const useCardStore = create<CardState>((set) => ({
  selectedId: null,
  select: (id) => set({ selectedId: id }),
}));
