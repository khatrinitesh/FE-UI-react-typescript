import { create } from "zustand";
import type { InputFocusState } from "../interface";
import { DEFAULT_INPUT_FOCUS_STATE } from "../components/FieldInputLabelActiveFocus/data";

interface InputFocusActions {
  setFocused: (focused: boolean) => void;
}

export const useInputFocusStore = create<InputFocusState & InputFocusActions>(
  (set) => ({
    ...DEFAULT_INPUT_FOCUS_STATE,
    setFocused: (focused) => set({ focused }),
  })
);
