export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  emoji: string;
}

export const products: Product[] = [
  {
    id: "headphones",
    name: "Studio Headphones",
    category: "Audio",
    price: 2499,
    description:
      "Comfortable over-ear headphones for listening all day.",
    emoji: "🎧",
  },
  {
    id: "watch",
    name: "Everyday Watch",
    category: "Accessories",
    price: 3999,
    description:
      "Minimal watch with a clean modern design.",
    emoji: "⌚",
  },
  {
    id: "camera",
    name: "Compact Camera",
    category: "Photography",
    price: 12999,
    description:
      "Capture your favorite moments with ease.",
    emoji: "📷",
  },
  {
    id: "speaker",
    name: "Portable Speaker",
    category: "Audio",
    price: 1899,
    description:
      "Bring music with you wherever you go.",
    emoji: "🔊",
  },
];

export const currency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);