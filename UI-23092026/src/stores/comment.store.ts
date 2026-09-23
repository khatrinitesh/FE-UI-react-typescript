import { create } from "zustand";
import { getComments } from "../services/comment.service";
import type { Comment } from "../types/comment";

interface CommentStore {
  comments: Comment[];
  loading: boolean;
  error: string | null;
  fetchComments: () => Promise<void>;
}

export const useCommentStore = create<CommentStore>()((set) => ({
  comments: [],
  loading: false,
  error: null,
  fetchComments: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const comments = await getComments();
      set({
        comments,
        loading: false,
      });
    } catch (error) {
      set({
        loading: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      });
    }
  },
}));
