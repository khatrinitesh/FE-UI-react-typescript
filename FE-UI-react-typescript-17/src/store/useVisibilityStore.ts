// src/store/useVisibilityStore.ts
import { create } from "zustand";
import {
  VISIBILITY_STATES,
  type VisibilityState,
} from "../components/ToggleShowHide/visibilityConstants";

interface VisibilityStore {
  state: VisibilityState;
  toggleVisibility: () => void;
}

export const useVisibilityStore = create<VisibilityStore>((set, get) => ({
  state: VISIBILITY_STATES.HIDE,
  toggleVisibility: () => {
    const current = get().state;
    const next =
      current === VISIBILITY_STATES.HIDE
        ? VISIBILITY_STATES.SHOW
        : VISIBILITY_STATES.HIDE;
    set({ state: next });
  },
}));
