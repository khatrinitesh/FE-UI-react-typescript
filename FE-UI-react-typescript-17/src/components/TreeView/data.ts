import type { TreeNode } from "../../interface";

export const DEFAULT_TREE_DATA: TreeNode[] = [
  {
    id: "1",
    label: "Root 1",
    isExpanded: true,
    children: [
      { id: "1-1", label: "Child 1-1" },
      {
        id: "1-2",
        label: "Child 1-2",
        children: [{ id: "1-2-1", label: "Grandchild 1-2-1" }],
      },
    ],
  },
  {
    id: "2",
    label: "Root 2",
    children: [{ id: "2-1", label: "Child 2-1" }],
  },
];
