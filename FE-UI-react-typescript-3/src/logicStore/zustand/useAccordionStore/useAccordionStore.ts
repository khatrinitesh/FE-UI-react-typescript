import { create } from "zustand";

interface AccordionStore {
  openItem: number | null;
  toggleItem: (id: number) => void;
}

const useAccordionStore = create<AccordionStore>((set, get) => ({
  openItem: null,
  toggleItem: (id) => {
    set({ openItem: get().openItem === id ? null : id });
  },
}));
export default useAccordionStore;
