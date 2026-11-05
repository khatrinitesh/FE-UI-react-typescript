import { api } from "./api";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export async function getComments(): Promise<Comment[]> {
  const { data } = await api.get<Comment[]>("");
  return data;
}

export async function submitContact(
  input: ContactPayload
) {
  const { data } = await api.post<Comment>("", {
    postId: 1,
    name: input.name,
    email: input.email,
    body: `${input.message}\nMobile: ${input.mobile}`,
  });
  return data;
}