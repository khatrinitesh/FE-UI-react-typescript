

export const contactService = {
  sendMessage: (payload: ContactFormValues) =>
    apiRequest<ContactApiResponse>('', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}
