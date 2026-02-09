import { create } from "zustand";
import type { Founder } from "../interfaces/founder";
import { FOUNDERS_DATA } from "../constants/foundersData";

interface FoundersState {
  founders: Founder[];
  setFounders: (data: Founder[]) => void;
}

export const useFoundersStore = create<FoundersState>((set) => ({
  founders: FOUNDERS_DATA,
  setFounders: (data) => set({ founders: data }),
}));
