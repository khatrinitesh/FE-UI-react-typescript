import type { TableData } from "../../interface";

export const TABLES_DATA: TableData[] = [
  {
    title: "Left Table",
    rows: [
      { id: 1, name: "Item A", value: 120, status: "Active" },
      { id: 2, name: "Item B", value: 75, status: "Pending" },
      { id: 3, name: "Item C", value: 300, status: "Inactive" },
    ],
  },
  {
    title: "Right Table",
    rows: [
      { id: 1, name: "Metric X", value: 500 },
      { id: 2, name: "Metric Y", value: 240 },
      { id: 3, name: "Metric Z", value: 820 },
    ],
  },
];
