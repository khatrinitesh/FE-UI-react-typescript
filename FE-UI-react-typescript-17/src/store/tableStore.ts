import { create } from "zustand";
import type { TableRowZebraStriping } from "../interface";
import { TABLE_DATA } from "../components/ZebraStripingTable/zebraStripData";

interface TableState {
  rows: TableRowZebraStriping[];
  toggleActive: (id: number) => void;
}

export const useTableStore = create<TableState>((set) => ({
  rows: TABLE_DATA,
  toggleActive: (id) =>
    set((state) => ({
      rows: state.rows.map((row) =>
        row.id === id ? { ...row, active: !row.active } : row
      ),
    })),
}));
