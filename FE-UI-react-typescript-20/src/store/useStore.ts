// src/store/useStore.ts

import { create } from "zustand";

// Define the store's state structure and actions
interface Store {
  count: number;
  user: { name: string; age: number } | null;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setUser: (user: { name: string; age: number }) => void;
}

export const useStore = create<Store>((set) => ({
  count: 0,
  user: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setUser: (user) => set({ user }),
}));
