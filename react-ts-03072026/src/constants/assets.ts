const ASSET_URL = "/assets"

export const IMAGES = {
  logo1: `${ASSET_URL}/img/logo1.png`,
  logo2: `${ASSET_URL}/img/logo2.png`,
} as const

export const VIDEOS = {
  intro: `${ASSET_URL}/videointro.mp4`,
} as const

export const LOTTIE = {
  loader: `${ASSET_URL}/lottie/loader.json`,
} as const

export const PDFS = {
  brochure: `${ASSET_URL}/pdf/brochure.pdf`,
} as const

export const ASSETS = {
  images: IMAGES,
  videos: VIDEOS,
  lottie: LOTTIE,
  pdfs: PDFS,
} as const