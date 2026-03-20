// Centralized routing paths

export const PATHS = {
  // Static routes
  HOME: "/" as const,
  ABOUT: "/about" as const,
  PRODUCTS: "products" as const,
  PRODUCT_DETAIL: "/products/:id" as const,
  CONTACT: "/contact" as const,

  // Dynamic routes
  productDetail: (id: string | number) => `/products/${id}`,
};
