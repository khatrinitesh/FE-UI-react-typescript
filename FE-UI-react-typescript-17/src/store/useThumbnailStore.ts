// src/store/useThumbnailStore.ts
import { create } from "zustand";
import {
  THUMBNAIL_STATUS,
  type ThumbnailStatus,
} from "../components/Thumbnail/thumbnailConstants";

export interface Thumbnail {
  id: string;
  url: string;
  title?: string;
  status: ThumbnailStatus;
}

interface ThumbnailStore {
  thumbnails: Thumbnail[];
  addThumbnail: (url: string, title?: string) => void;
  removeThumbnail: (id: string) => void;
  selectThumbnail: (id: string) => void;
  clearThumbnails: () => void;
}

export const useThumbnailStore = create<ThumbnailStore>((set, get) => ({
  thumbnails: [],

  addThumbnail: (url, title) => {
    const newThumbnail: Thumbnail = {
      id: crypto.randomUUID(),
      url,
      title,
      status: THUMBNAIL_STATUS.UNSELECTED,
    };
    set((state) => ({ thumbnails: [...state.thumbnails, newThumbnail] }));
  },

  removeThumbnail: (id) => {
    set((state) => ({
      thumbnails: state.thumbnails.filter((t) => t.id !== id),
    }));
  },

  selectThumbnail: (id) => {
    set((state) => ({
      thumbnails: state.thumbnails.map((t) => ({
        ...t,
        status:
          t.id === id ? THUMBNAIL_STATUS.SELECTED : THUMBNAIL_STATUS.UNSELECTED,
      })),
    }));
  },

  clearThumbnails: () => set({ thumbnails: [] }),
}));
