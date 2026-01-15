// src/store/useBeamsStore.ts
import { create } from "zustand";
import type { BeamsState } from "../interface";

export const useBeamsStore = create<BeamsState>((set, get) => ({
  beams: Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 800,
    y: Math.random() * 600,
    vx: (Math.random() - 0.5) * 4,
    vy: (Math.random() - 0.5) * 4,
    size: 4 + Math.random() * 4,
  })),
  updateBeams: () => {
    set(({ beams }) => {
      const width = 800;
      const height = 600;
      const newBeams = beams.map((b) => {
        let nx = b.x + b.vx;
        let ny = b.y + b.vy;
        let nvx = b.vx;
        let nvy = b.vy;

        // Collision with walls
        if (nx <= 0 || nx >= width) nvx = -nvx;
        if (ny <= 0 || ny >= height) nvy = -nvy;

        return { ...b, x: nx, y: ny, vx: nvx, vy: nvy };
      });

      // Simple collision between beams
      for (let i = 0; i < newBeams.length; i++) {
        for (let j = i + 1; j < newBeams.length; j++) {
          const dx = newBeams[i].x - newBeams[j].x;
          const dy = newBeams[i].y - newBeams[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < (newBeams[i].size + newBeams[j].size) * 2) {
            // Swap velocities
            const tempVx = newBeams[i].vx;
            const tempVy = newBeams[i].vy;
            newBeams[i].vx = newBeams[j].vx;
            newBeams[i].vy = newBeams[j].vy;
            newBeams[j].vx = tempVx;
            newBeams[j].vy = tempVy;
          }
        }
      }

      return { beams: newBeams };
    });
  },
}));
