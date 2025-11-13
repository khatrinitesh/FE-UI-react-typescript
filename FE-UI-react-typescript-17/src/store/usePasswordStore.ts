// src/store/usePasswordStore.ts
import { create } from "zustand";
import {
  PASSWORD_VISIBILITY,
  type PasswordVisibility,
} from "../components/TogglePwdVisibility/passwordConstants";

interface PasswordStore {
  visibility: PasswordVisibility;
  toggleVisibility: () => void;
}

export const usePasswordStore = create<PasswordStore>((set, get) => ({
  visibility: PASSWORD_VISIBILITY.HIDE,
  toggleVisibility: () => {
    const current = get().visibility;
    const next =
      current === PASSWORD_VISIBILITY.HIDE
        ? PASSWORD_VISIBILITY.SHOW
        : PASSWORD_VISIBILITY.HIDE;
    set({ visibility: next });
  },
}));
