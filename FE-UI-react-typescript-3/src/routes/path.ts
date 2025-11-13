export const Paths = {
  landing: "",
  about: "about",
  service: "service",
  contact: "contact",
  notFound: "*",
} as const;

export type PathKeys = keyof typeof Paths;
