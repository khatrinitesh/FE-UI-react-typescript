import { create } from "zustand";

interface ButtonState {
  activeId: number;
  setActive: (id: number) => void;
}

export const useButtonStore = create<ButtonState>((set) => ({
  activeId: 1,
  setActive: (id) => set({ activeId: id }),
}));
