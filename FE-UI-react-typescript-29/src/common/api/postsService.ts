import { API_ENDPOINTS } from "../../constants/constants";
import type { IPost } from "../../interface";
import { axiosInstance } from "./axiosInstance";

export const getPosts = async (): Promise<IPost[]> => {
  const { data } = await axiosInstance.get(API_ENDPOINTS.POSTS);
  return data;
};
