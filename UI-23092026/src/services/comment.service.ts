import type { Comment } from "../types/comment";

const API_URL = import.meta.env.VITE_API_URL;

export const getComments = async (): Promise<Comment[]> => {
  const response = await fetch(`${API_URL}/comments`);

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }

  return response.json();
};
