const ASSETS_PATH = import.meta.env.VITE_IMG_ASSETS;

export const getImage = (fileName: string) => `${ASSETS_PATH}/img/${fileName}`;
export const getVideo = (fileName: string) =>
  `${ASSETS_PATH}/videos/${fileName}`;
export const getFont = (fileName: string): string =>
  `${ASSETS_PATH}/fonts/${fileName}`;
