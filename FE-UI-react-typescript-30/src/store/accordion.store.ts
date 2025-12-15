// store/accordion.store.ts
import { create } from "zustand";

interface AccordionState {
  openId: string | null;
  toggle: (id: string) => void;
}

export const useAccordionStore = create<AccordionState>((set) => ({
  openId: null,
  toggle: (id) =>
    set((state) => ({
      openId: state.openId === id ? null : id,
    })),
}));
