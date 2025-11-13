import { create } from "zustand";

interface AccordionStore {
  openItemId: number | null;
  toggleItem: (id: number) => void;
}

export const useAccordionStore = create<AccordionStore>((set, get) => ({
  openItemId: null,
  toggleItem: (id: number) =>
    set({
      openItemId: get().openItemId === id ? null : id,
    }),
}));
