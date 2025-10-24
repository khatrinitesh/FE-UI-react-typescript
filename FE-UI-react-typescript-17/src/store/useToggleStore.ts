// src/store/useToggleStore.ts
import { create } from "zustand";
import {
  TOGGLE_STATES,
  type ToggleState,
} from "../components/ToggleSwitch/toggleConstants";

interface ToggleStore {
  state: ToggleState;
  toggle: () => void;
}

export const useToggleStore = create<ToggleStore>((set, get) => ({
  state: TOGGLE_STATES.OFF,
  toggle: () => {
    const current = get().state;
    const next =
      current === TOGGLE_STATES.OFF ? TOGGLE_STATES.ON : TOGGLE_STATES.OFF;
    set({ state: next });
  },
}));
