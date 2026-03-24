import { api } from "../api/axios";
import type { Post } from "../interface";

export const getPosts = async (): Promise<Post[]> => {
  const res = await api.get("");
  return res.data;
};

export const getPostById = async (id: string): Promise<Post> => {
  const res = await api.get(`/${id}`);
  return res.data;
};
