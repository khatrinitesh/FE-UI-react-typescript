import { create } from "zustand";
import type { TableState } from "../../interface";

export const useTableStore = create<TableState>((set) => ({
  data: [],
  searchQuery: "",
  currentPage: 1,
  rowsPerPage: 5,
  sortBy: "name",
  sortOrder: "asc",

  setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setSort: (column) =>
    set((state) => ({
      sortBy: column,
      sortOrder:
        state.sortBy === column && state.sortOrder === "asc" ? "desc" : "asc",
    })),
  setData: (data) => set({ data }),
}));
