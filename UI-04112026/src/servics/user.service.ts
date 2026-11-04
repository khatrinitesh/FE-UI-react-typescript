import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

export interface User {
  id: number;
  name: string;
  email: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users");
  return response.data;
};

export const createUser = async (payload: Omit<User, "id">) => {
  const response = await api.post("/users", payload);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};
