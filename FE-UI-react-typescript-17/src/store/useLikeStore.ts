// src/store/useLikeStore.ts
import { create } from "zustand";
import {
  LIKE_STATES,
  type LikeState,
} from "../components/ToggleLikeDislike/likeConstants";

interface LikeStore {
  state: LikeState;
  toggleLike: () => void;
  toggleDislike: () => void;
}

export const useLikeStore = create<LikeStore>((set, get) => ({
  state: LIKE_STATES.NONE,

  toggleLike: () => {
    const current = get().state;
    const next =
      current === LIKE_STATES.LIKE ? LIKE_STATES.NONE : LIKE_STATES.LIKE;
    set({ state: next });
  },

  toggleDislike: () => {
    const current = get().state;
    const next =
      current === LIKE_STATES.DISLIKE ? LIKE_STATES.NONE : LIKE_STATES.DISLIKE;
    set({ state: next });
  },
}));
