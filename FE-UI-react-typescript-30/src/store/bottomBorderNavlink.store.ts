import { create } from "zustand";

interface NavState {
  activeId: number | null;
  setActiveId: (id: number) => void;
}

export const useNavStore = create<NavState>((set) => ({
  activeId: null,
  setActiveId: (id) => set({ activeId: id }),
}));
