export const Paths = {
  landing: "",
  about: "about",
  service: "service",
  serviceDetail: "service/:id",
  contact: "contact",
  notFound: "*",
} as const;

export type PathKeys = keyof typeof Paths;
