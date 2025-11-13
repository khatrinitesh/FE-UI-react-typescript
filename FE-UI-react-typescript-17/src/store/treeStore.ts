// src/store/treeStore.ts

import { create } from "zustand";
import type { TreeNode } from "../interface";
import { DEFAULT_TREE_DATA } from "../components/TreeView/data";

interface TreeState {
  treeData: TreeNode[];
  toggleNode: (id: string) => void;
}

function toggleExpand(nodes: TreeNode[], id: string): TreeNode[] {
  return nodes.map((node) => {
    if (node.id === id) {
      return { ...node, isExpanded: !node.isExpanded };
    }
    if (node.children) {
      return { ...node, children: toggleExpand(node.children, id) };
    }
    return node;
  });
}

export const useTreeStore = create<TreeState>((set) => ({
  treeData: DEFAULT_TREE_DATA,
  toggleNode: (id) =>
    set((state) => ({
      treeData: toggleExpand(state.treeData, id),
    })),
}));
