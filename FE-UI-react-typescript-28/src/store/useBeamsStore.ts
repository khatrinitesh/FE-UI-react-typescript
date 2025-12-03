// useBeamsStore.ts
import { create } from "zustand";

export interface Beam {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  width: number;
  height: number;
  color: string;
}

interface BeamsState {
  beams: Beam[];
  update: (dt: number, w: number, h: number) => void;
}

export const useBeamsStore = create<BeamsState>((set, get) => ({
  beams: Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    x: Math.random() * 800,
    y: Math.random() * 600,
    dx: (Math.random() - 0.5) * 100,
    dy: (Math.random() - 0.5) * 100,
    width: 220,
    height: 2,
    color: `hsl(${Math.random() * 360}, 80%, 65%)`,
  })),

  update: (dt, w, h) => {
    const beams = get().beams.map((b) => {
      let { x, y, dx, dy } = b;

      // Move
      x += dx * dt;
      y += dy * dt;

      // Collision with screen edges
      if (x <= 0 || x + b.width >= w) dx *= -1;
      if (y <= 0 || y + b.height >= h) dy *= -1;

      return { ...b, x, y, dx, dy };
    });

    set({ beams });
  },
}));
