import { create } from "zustand";

interface AccordionState {
  activeId: string | null;
  setActive: (id: string | null) => void;
}

export const useAccordionStore = create<AccordionState>((set) => ({
  activeId: null,
  setActive: (id) => set({ activeId: id }),
}));
