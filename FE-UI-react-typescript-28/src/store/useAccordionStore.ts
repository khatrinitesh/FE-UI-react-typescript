import { create } from "zustand";

interface AccordionState {
  openId: number | null;
  toggleAccordion: (id: number) => void;
}

export const useAccordionStore = create<AccordionState>((set) => ({
  openId: null,
  toggleAccordion: (id) =>
    set((state) => ({
      openId: state.openId === id ? null : id,
    })),
}));
