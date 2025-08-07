import { create } from "zustand";
import type { AnimationStateProps } from "../../../interface";

export const useAnimationStore = create<AnimationStateProps>((set) => ({
  isAnimated: false,
  toggleAnimation: () =>
    set((state: { isAnimated: any }) => ({ isAnimated: !state.isAnimated })),
}));
