import { create } from "zustand";
import type { ListState } from "../interface";
import { INITIAL_ITEMS } from "../constants/constants";

export const useListStore = create<ListState>((set) => ({
  items: INITIAL_ITEMS,

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
