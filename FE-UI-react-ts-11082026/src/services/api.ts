const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

if (!API_BASE_URL) {
  throw new Error("VITE_API_BASE_URL is not configured");
}

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

const buildUrl = (endpoint: string, params?: RequestOptions["params"]) => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  return url.toString();
};

const request = async <T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> => {
  const { params, ...fetchOptions } = options;

  const response = await fetch(buildUrl(endpoint, params), {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
};

export const api = {
  get: <T>(endpoint: string, params?: RequestOptions["params"]) =>
    request<T>(endpoint, {
      method: "GET",
      params,
    }),

  post: <T, D = unknown>(endpoint: string, data?: D) =>
    request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    }),

  put: <T, D = unknown>(endpoint: string, data?: D) =>
    request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  patch: <T, D = unknown>(endpoint: string, data?: D) =>
    request<T>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  delete: <T = void>(endpoint: string) =>
    request<T>(endpoint, {
      method: "DELETE",
    }),
};
