import { create } from "zustand";

interface ArrowState {
  activeId: string | null;
  toggle: (id: string) => void;
}

// ✅ Create the store
export const useArrowStore = create<ArrowState>((set) => ({
  activeId: null,
  toggle: (id: string) =>
    set((state) => ({
      activeId: state.activeId === id ? null : id,
    })),
}));
