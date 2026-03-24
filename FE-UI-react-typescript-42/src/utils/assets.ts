const base = "/assets";

export const ASSETS = {
  img: (file: string) => `${base}/images/${file}`,
  video: (file: string) => `${base}/videos/${file}`,
  lottie: (file: string) => `${base}/lottie/${file}`,
  pdf: (file: string) => `${base}/pdf/${file}`,
  font: (file: string) => `${base}/fonts/${file}`,
};
