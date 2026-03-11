import { create } from "zustand";

interface User {
  id: number;
  name: string;
  role: string;
}

interface TableState {
  users: User[];
  setUsers: (users: User[]) => void;
}

export const useTableStore = create<TableState>((set) => ({
  users: [],

  setUsers: (users) =>
    set({
      users,
    }),
}));
