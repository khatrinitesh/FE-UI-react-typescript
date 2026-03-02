const ASSETS_PATH = import.meta.env.VITE_IMG_ASSETS;

export const getImage = (fileName: string) =>
  `${ASSETS_PATH}/images/${fileName}`;
export const getVideo = (fileName: string) =>
  `${ASSETS_PATH}/videos/${fileName}`;
export const getFont = (fileName: string): string =>
  `${ASSETS_PATH}/fonts/${fileName}`;
export const getLottie = (fileName: string): string =>
  `${ASSETS_PATH}/lottie/${fileName}`;
export const getPdf = (fileName: string): string =>
  `${ASSETS_PATH}/pdf/${fileName}`;
