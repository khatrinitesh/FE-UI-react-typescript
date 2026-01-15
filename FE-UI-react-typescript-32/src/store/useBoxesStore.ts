// src/store/useBoxesStore.ts
import { create } from "zustand";
import type { BoxesState } from "../interface";

export const useBoxesStore = create<BoxesState>((set, get) => ({
  boxes: Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: Math.random() * 800,
    y: Math.random() * 600,
    size: 40 + Math.random() * 60,
    rotate: Math.random() * 360,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    vRotate: (Math.random() - 0.5) * 2,
  })),
  updateBoxes: () => {
    set(({ boxes }) => {
      const width = 800;
      const height = 600;
      const newBoxes = boxes.map((b) => {
        let nx = b.x + b.vx;
        let ny = b.y + b.vy;
        let nRotate = b.rotate + b.vRotate;
        let nvx = b.vx;
        let nvy = b.vy;

        // Bounce off walls
        if (nx <= 0 || nx >= width - b.size) nvx = -nvx;
        if (ny <= 0 || ny >= height - b.size) nvy = -nvy;

        return { ...b, x: nx, y: ny, rotate: nRotate, vx: nvx, vy: nvy };
      });

      return { boxes: newBoxes };
    });
  },
}));
