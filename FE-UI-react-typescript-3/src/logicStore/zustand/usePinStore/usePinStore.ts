import { create } from "zustand";
import type { PinActions, PinState } from "../../../interface";

const usePinStore = create<PinState & PinActions>((set) => ({
  rotateX: 0,
  rotateY: 0,
  setRotation: (x, y) => set({ rotateX: x, rotateY: y }),
  resetRotation: () => set({ rotateX: 0, rotateY: 0 }),
}));

export default usePinStore;
