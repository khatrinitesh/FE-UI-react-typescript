export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Check if password meets minimum length (e.g., 6 characters)
export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

// New: check if admin credentials match
export const isAdminCredentials = (
  email: string,
  password: string
): boolean => {
  const adminEmail = "admin@example.com"; // replace with exact admin email you want
  const adminPassword = "admin@123";
  return email === adminEmail && password === adminPassword;
};
