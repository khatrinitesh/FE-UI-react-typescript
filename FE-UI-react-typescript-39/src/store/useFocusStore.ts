import { create } from "zustand";

interface FocusState {
  activeId: number | null;
  setActive: (id: number | null) => void;
}

export const useFocusStore = create<FocusState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
