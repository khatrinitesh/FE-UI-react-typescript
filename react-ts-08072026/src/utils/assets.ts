const $assets = "/assets"

export const ASSETS = {
  img: {
    logo: `${$assets}/img/logo.png`,
    hero: `${$assets}/img/hero.jpg`,
    product: `${$assets}/img/product.jpg`,
    placeholder: `${$assets}/img/placeholder.jpg`,
  },

  video: {
    intro: `${$assets}/video/intro.mp4`,
    demo: `${$assets}/video/demo.mp4`,
  },

  pdf: {
    brochure: `${$assets}/pdf/brochure.pdf`,
  },
} as const