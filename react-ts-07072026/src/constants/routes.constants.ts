export const ROUTES = {
  home: '/',
  about: '/about',
  product: '/product',
  productDetails: '/product-details',
  contact: '/contact',
} as const

export const NAV_LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'About', to: ROUTES.about },
  { label: 'Product', to: ROUTES.product },
  { label: 'Contact', to: ROUTES.contact },
] as const
