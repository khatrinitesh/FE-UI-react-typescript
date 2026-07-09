const ASSET_URL = '/assets'

export const ASSETS = {
  images: {
    hero: `${ASSET_URL}/images/frontend.svg`,
    logo: `${ASSET_URL}/images/frontend.svg`,
  },

  videos: {
    intro: `${ASSET_URL}/videos/intro.mp4`,
  },

  pdfs: {
    sample: `${ASSET_URL}/pdfs/sample.pdf`,
  },
} as const