export interface Reqres {
  id: string;
  data: {
    name: string;
    price: number;
    description?: string;
    category?: string;
    image?: string;
  };
}