// src/utils/validationUtils.ts

export const isValidEmail = (email: string): boolean => {
  // Simple regex to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  // Example: password must be at least 6 characters
  return password.length >= 6;
};
