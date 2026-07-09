export interface ApiErrorResponse {
  message: string
  status?: number
}

export interface ApiState<TData> {
  data: TData | null
  loading: boolean
  error: string | null
}

export interface RequestOptions extends RequestInit {
  authToken?: string
}
