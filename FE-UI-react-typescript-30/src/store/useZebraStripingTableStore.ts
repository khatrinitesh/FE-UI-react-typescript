import { create } from "zustand";

interface TableUIState {
  activeRowId: string | null;
  setActiveRowId: (id: string | null) => void;
}

export const useZebraStripingTableStore = create<TableUIState>((set) => ({
  activeRowId: null,
  setActiveRowId: (id) => set({ activeRowId: id }),
}));
