import { API_URL } from "../constants/api.constants"


function createUrl(endpoint: string) {
  return `${API_URL}${endpoint}`
}

export async function apiRequest<TData>(endpoint = '', options: IdleRequestOptions = {}): Promise<TData> {
  const { authToken, headers, ...restOptions } = options

  const response = await fetch(createUrl(endpoint), {
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      ...headers,
    },
  })

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`

    try {
      const errorBody = (await response.json()) as { message?: string }
      message = errorBody.message || message
    } catch {
      // The API did not return JSON; keep the default message.
    }

    throw new Error(message)
  }

  return response.json() as Promise<TData>
}
