import { create } from "zustand";
import type { CardActions, CardState } from "../../../interface";

const useCardstore = create<CardState & CardActions>((set) => ({
  rotateX: 0,
  rotateY: 0,
  setRotation: (x, y) => set({ rotateX: x, rotateY: y }),
  resetRotation: () => set({ rotateX: 0, rotateY: 0 }),
}));

export default useCardstore;
