const ASSETS_PATH = import.meta.env.VITE_ASSETS_PATH;

export const Images = {
  logo1: `${ASSETS_PATH}/img/logo1.png`,
  logo2: `${ASSETS_PATH}/img/logo2.png`,
} as const;

export const Videos = {
  introVideo: `${ASSETS_PATH}/videos/intro.mp4`,
} as const;

export const Pdfs = {
  report: `${ASSETS_PATH}/pdf/report.pdf`,
} as const;

const Assets = {
  Images,
  Videos,
  Pdfs,
};

export default Assets;
