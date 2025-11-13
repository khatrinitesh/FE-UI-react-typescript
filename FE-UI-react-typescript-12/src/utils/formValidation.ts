// src/utils/formValidation.ts

export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const isPasswordStrong = (password: string): boolean => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return strongPasswordRegex.test(password);
};

export const isRequired = (value: string): boolean => {
  return value.trim() !== "";
};

export const isPhoneNumberValid = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.trim());
};

export const isOTPValid = (otp: string, length: number = 6): boolean => {
  const otpRegex = new RegExp(`^[0-9]{${length}}$`);
  return otpRegex.test(otp.trim());
};
