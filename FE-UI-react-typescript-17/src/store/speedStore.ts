import { create } from "zustand";
import type { SpeedActions, SpeedState } from "../interface";
import { SPEED_CONSTANTS } from "../components/SpeedMeter/constants";

export const useSpeedStore = create<SpeedState & SpeedActions>((set) => ({
  speed: 0,
  maxSpeed: SPEED_CONSTANTS.MAX_SPEED,

  setSpeed: (value) =>
    set(() => ({
      speed: Math.min(
        Math.max(value, SPEED_CONSTANTS.MIN_SPEED),
        SPEED_CONSTANTS.MAX_SPEED
      ),
    })),

  increaseSpeed: (step = SPEED_CONSTANTS.STEP) =>
    set((state) => ({
      speed: Math.min(state.speed + step, state.maxSpeed),
    })),

  decreaseSpeed: (step = SPEED_CONSTANTS.STEP) =>
    set((state) => ({
      speed: Math.max(state.speed - step, SPEED_CONSTANTS.MIN_SPEED),
    })),
}));
