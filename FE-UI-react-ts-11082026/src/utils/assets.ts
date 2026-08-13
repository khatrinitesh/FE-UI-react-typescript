const ASSETS_PATH = import.meta.env.VITE_ASSETS || "/assets";

export const Assets = {
  Images: {
    logo1: `${ASSETS_PATH}/img/logo1.png`,
    logo2: `${ASSETS_PATH}/img/logo2.png`,
  },

  Videos: {
    intro: `${ASSETS_PATH}/video/intro.mp4`,
    banner: `${ASSETS_PATH}/video/banner.mp4`,
  },

  PDFs: {
    brochure: `${ASSETS_PATH}/pdf/brochure.pdf`,
    terms: `${ASSETS_PATH}/pdf/terms.pdf`,
  },
} as const;
