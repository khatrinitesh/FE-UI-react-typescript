import { create } from "zustand";

interface IconState {
  activeId: string | null;
  toggle: (id: string) => void;
}

export const useIconStore = create<IconState>((set) => ({
  activeId: null,
  toggle: (id) =>
    set((state) => ({
      activeId: state.activeId === id ? null : id,
    })),
}));
