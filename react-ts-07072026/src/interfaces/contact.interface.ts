export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export interface ContactApiResponse {
  id?: number
  name: string
  email: string
  message: string
}
