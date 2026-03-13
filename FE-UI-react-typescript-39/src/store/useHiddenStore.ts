import { create } from "zustand";

interface HiddenStore {
  revealed: number[];
  reveal: (id: number) => void;
}

export const useHiddenStore = create<HiddenStore>((set) => ({
  revealed: [],
  reveal: (id) =>
    set((state) => ({
      revealed: [...state.revealed, id],
    })),
}));
