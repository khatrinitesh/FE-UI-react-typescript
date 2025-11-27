import { PATHS } from "../routes/path";

export const API_URL = "https://jsonplaceholder.typicode.com";

export const QUERY_KEYS = {
  posts: "posts",
} as const;

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: PATHS.ABOUT },
  { label: "Contact", path: PATHS.CONTACT },
];
