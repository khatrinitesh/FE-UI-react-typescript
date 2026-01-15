import type {
  BannerItem,
  BentoItem,
  BigHeaderContent,
  BlockButtonItem,
  BlogPost,
  BWImage,
} from "../interface";

export const accordionItems = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" },
];

export const autocompleteSuggestions = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
];

export const BANNERS: BannerItem[] = [
  {
    id: 1,
    title: "Welcome to Our Platform",
    description: "Experience the future of UI design with React & TailwindCSS",
    ctaText: "Get Started",
    ctaLink: "/get-started",
    bgColor: "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Join Our Community",
    description:
      "Connect, learn, and grow with hundreds of developers worldwide",
    ctaText: "Join Now",
    ctaLink: "/join",
    bgColor: "bg-gradient-to-r from-green-400 to-blue-500",
  },
];

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 1,
    title: "Analytics",
    description: "Real-time performance insights",
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Security",
    description: "Enterprise-grade protection",
    span: "md:col-span-1 md:row-span-1",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    id: 3,
    title: "Automation",
    description: "Streamline workflows",
    span: "md:col-span-1 md:row-span-1",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Cloud",
    description: "Scalable infrastructure",
    span: "md:col-span-2 md:row-span-1",
    gradient: "from-sky-400 to-blue-600",
  },
];

export const BIG_HEADER_CONTENT: BigHeaderContent = {
  title: "Build Faster. Scale Smarter.",
  subtitle: "Enterprise UI Platform",
  description:
    "A modern React and TailwindCSS powered platform designed for performance, scalability, and developer experience.",
  primaryCta: "Get Started",
  secondaryCta: "Learn More",
};

export const BW_IMAGES: BWImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/28867943/pexels-photo-28867943.jpeg?_gl=1*1xd4ljf*_ga*MTg4MTU2NTcyMi4xNzY2MTIzNTEx*_ga_8JE65Q40S6*czE3Njg0Njk4ODMkbzIkZzEkdDE3Njg0Njk4OTkkajQ0JGwwJGgw",
    alt: "Sample Image 1",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1673240845266-2f2c432cf194?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Sample Image 2",
  },
];

export const BLOCK_BUTTONS: BlockButtonItem[] = [
  { id: 1, label: "Save Changes", variant: "primary" },
  { id: 2, label: "Edit Profile", variant: "secondary" },
  { id: 3, label: "Delete Account", variant: "danger" },
];

export const variantClasses = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  danger: "bg-red-600 hover:bg-red-700 text-white",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Building Modern UI with React",
    excerpt:
      "Learn how to build scalable and maintainable UI using React, TypeScript, and TailwindCSS.",
    image: "/images/blog1.jpg",
    author: "John Doe",
    date: "Aug 12, 2024",
  },
  {
    id: 2,
    title: "Why Zustand is Perfect for State",
    excerpt:
      "Zustand offers a minimal and powerful way to manage global state in React applications.",
    image: "/images/blog2.jpg",
    author: "Jane Smith",
    date: "Sep 02, 2024",
  },
  {
    id: 3,
    title: "TailwindCSS Tips & Tricks",
    excerpt:
      "Improve your productivity and design consistency using TailwindCSS utility classes.",
    image: "/images/blog3.jpg",
    author: "Alex Brown",
    date: "Sep 18, 2024",
  },
];
