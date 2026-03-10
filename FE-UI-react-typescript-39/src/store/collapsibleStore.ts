import { create } from "zustand";
import type { CollapseState } from "../interface";

export const useCollapseStore = create<CollapseState>((set) => ({
  activeId: null,

  toggleItem: (id) =>
    set((state) => ({
      activeId: state.activeId === id ? null : id,
    })),
}));
