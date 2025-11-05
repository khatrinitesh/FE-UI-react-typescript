import { create } from "zustand";

interface IconState {
  activeId: string;
  setActive: (id: string) => void;
}

export const useIconStore = create<IconState>((set) => ({
  activeId: "home", // default active icon
  setActive: (id) => set({ activeId: id }),
}));
