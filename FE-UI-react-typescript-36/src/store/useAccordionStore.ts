import { create } from "zustand";
import { ACCORDION_ITEMS } from "../constants/constants";
import type { AccordionStore } from "../interface";

export const useAccordionStore = create<AccordionStore>((set) => ({
  openItemId: ACCORDION_ITEMS[0]?.id ?? null,
  toggleItem: (id) =>
    set((state) => ({
      openItemId: state.openItemId === id ? null : id,
    })),
}));
