import { create } from "zustand";

export interface BeamType {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string; // Tailwind color class
}

const COLORS = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400"];
const BEAM_COUNT = 10;

interface BeamState {
  beams: BeamType[];
  update: (width: number, height: number) => void;
}

export const useBeamStore = create<BeamState>((set, get) => ({
  beams: Array.from({ length: BEAM_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 800,
    y: Math.random() * 600,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    size: 50 + Math.random() * 30,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  })),
  update: (width, height) => {
    const updatedBeams = get().beams.map((b) => {
      let newX = b.x + b.vx;
      let newY = b.y + b.vy;
      let vx = b.vx;
      let vy = b.vy;

      // Boundary collision
      if (newX < 0 || newX + b.size > width) vx = -vx;
      if (newY < 0 || newY + b.size / 5 > height) vy = -vy; // height scaled by size/5

      return { ...b, x: newX, y: newY, vx, vy };
    });
    set({ beams: updatedBeams });
  },
}));
