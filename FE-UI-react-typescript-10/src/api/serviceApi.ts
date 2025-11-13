import axios from "axios";
import type { IService } from "../interface";

// axios create
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// fetchServices
export const fetchServices = async (): Promise<IService[]> => {
  const response = await api.get("/posts");
  return response.data;
};

// fetchServiceById
export const fetchServiceById = async (id: string): Promise<IService> => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
