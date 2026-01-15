import { create } from "zustand";
import type { BlogPost } from "../interface";
import { BLOG_POSTS } from "../constants/constants";

interface BlogState {
  posts: BlogPost[];
  activePostId: number | null;
  setActivePost: (id: number) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  posts: BLOG_POSTS,
  activePostId: null,
  setActivePost: (id) => set({ activePostId: id }),
}));
