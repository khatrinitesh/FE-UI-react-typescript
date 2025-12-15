import { create } from "zustand";
import type { BeamState } from "../interface/auth";
import { INITIAL_BEAMS } from "../constants/constants";

export const useBeamStore = create<BeamState>((set) => ({
  beams: INITIAL_BEAMS,
  updateBeams: (maxWidth, maxHeight) => {
    set((state) => ({
      beams: state.beams.map((beam) => {
        let newX = beam.x + beam.dx;
        let newY = beam.y + beam.dy;

        // Collision with bounds
        if (newX < 0 || newX + beam.width > maxWidth) beam.dx *= -1;
        if (newY < 0 || newY + beam.height > maxHeight) beam.dy *= -1;

        newX = Math.max(0, Math.min(maxWidth - beam.width, newX));
        newY = Math.max(0, Math.min(maxHeight - beam.height, newY));

        return { ...beam, x: newX, y: newY };
      }),
    }));
  },
}));
