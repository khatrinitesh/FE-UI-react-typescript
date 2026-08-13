const assets = {
  images: {
    logo1: `${import.meta.env.VITE_ASSETS}/img/logo1.png`,
    logo2: `${import.meta.env.VITE_ASSETS}/img/logo2.png`,
  },

  videos: {
    hero: `${import.meta.env.VITE_ASSETS}/video/hero.mp4`,
    product: `${import.meta.env.VITE_ASSETS}/video/product.mp4`,
  },

  pdf: {
    brochure: `${import.meta.env.VITE_ASSETS}/pdf/brochure.pdf`,
  },
} as const;

export default assets;
