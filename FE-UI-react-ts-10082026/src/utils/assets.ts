const ASSETS_BASE_URL = import.meta.env.VITE_ASSETS;

// ===============================
// Images
// ===============================
const Images = {
  logo1: `${ASSETS_BASE_URL}/img/logo1.png`,
  logo2: `${ASSETS_BASE_URL}/img/logo2.png`,
} as const;

// ===============================
// Videos
// ===============================
const Videos = {
  intro: `${ASSETS_BASE_URL}/video/intro.mp4`,
} as const;

// ===============================
// PDFs
// ===============================
const Pdfs = {
  terms: `${ASSETS_BASE_URL}/pdf/terms.pdf`,
} as const;

// ===============================
// Assets
// ===============================
const Assets = {
  Images,
  Videos,
  Pdfs,
} as const;

export default Assets;
