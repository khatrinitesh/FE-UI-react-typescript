import axios from "axios";
import type { FAQ } from "../interfaces/faq.interface";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchFAQs = async (): Promise<FAQ[]> => {
  const response = await axios.get<FAQ[]>(API_URL);
  return response.data.slice(0, 5);
};
