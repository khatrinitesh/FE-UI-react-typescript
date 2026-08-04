const ASSETS_PATH = import.meta.env.VITE_ASSETS_PATH || "/assets";

export const Assets = {
  logos: {
    logo1: `${ASSETS_PATH}/img/logo1.png`,
    logo2: `${ASSETS_PATH}/img/logo2.png`,
  },
  icons: {
    user: `${ASSETS_PATH}/img/icons/user.png`,
    mail: `${ASSETS_PATH}/img/icons/email.png`,
    message: `${ASSETS_PATH}/img/icons/message.png`,
  },
} as const;
