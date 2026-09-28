export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Build Modern React Applications",
    description:
      "Learn how to structure scalable React applications using TypeScript and modern development practices.",
    category: "Development",
    author: "John Doe",
    date: "Sep 20, 2026",
    readTime: "8 min read",
    image: "/assets/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "Modern UI Design Principles",
    description:
      "Practical principles for creating clean, accessible and responsive user interfaces.",
    category: "Design",
    author: "Sarah Wilson",
    date: "Sep 18, 2026",
    readTime: "6 min read",
    image: "/assets/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "TypeScript Tips Every Developer Should Know",
    description:
      "Improve your TypeScript code with reusable types, interfaces and better patterns.",
    category: "TypeScript",
    author: "Michael Smith",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    image: "/assets/images/blog-3.jpg",
  },
  {
    id: 4,
    title: "Building Better Responsive Websites",
    description:
      "Understand responsive layouts and create experiences that work across every device.",
    category: "Frontend",
    author: "Emma Brown",
    date: "Sep 12, 2026",
    readTime: "7 min read",
    image: "/assets/images/blog-4.jpg",
  },
];
