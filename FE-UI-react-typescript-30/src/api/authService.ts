import type { ILogin, IOTP, IRegister } from "../interface/auth";

export const login = async (data: ILogin) => {
  // Mock API
  return new Promise<{ success: boolean; email: string }>((resolve) =>
    setTimeout(() => resolve({ success: true, email: data.email }), 1000)
  );
};

export const verifyOTP = async (data: IOTP) => {
  return new Promise<{ success: boolean }>((resolve) =>
    setTimeout(() => resolve({ success: data.otp === "123456" }), 1000)
  );
};

export const register = async (data: IRegister) => {
  return new Promise<{ success: boolean }>((resolve) =>
    setTimeout(() => resolve({ success: true }), 1000)
  );
};
