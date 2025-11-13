import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchComments = async () => {
  const { data } = await apiClient.get("/comments");
  return data;
};
