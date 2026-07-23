const assetsBaseUrl =
  import.meta.env.VITE_ASSETS_BASE_URL?.replace(/\/$/, "") || "/assets";

export const assets = {
  img: {
    logo1: `${assetsBaseUrl}/img/logo1.png`,
    logo2: `${assetsBaseUrl}/img/logo2.png`,
  },

  video: {
    introduction: `${assetsBaseUrl}/video/introduction.mp4`,
    background: `${assetsBaseUrl}/video/background.mp4`,
  },

  pdfs: {
    brochure: `${assetsBaseUrl}/pdf/brochure.pdf`,
    terms: `${assetsBaseUrl}/pdf/terms.pdf`,
  },
} as const;

export type AssetCollection = typeof assets;