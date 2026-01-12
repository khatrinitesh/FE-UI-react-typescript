import { API_BASE_URL } from "./endpoints";

export async function apiRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  return response.json();
}
