export const validateUsername = (value: string) => {
  if (!value.trim()) {
    return "Username is required";
  }

  if (value.length < 3) {
    return "Username must be at least 3 characters";
  }

  if (!/^[a-zA-Z0-9_]+$/.test(value)) {
    return "Username can contain only letters, numbers and underscore";
  }

  return undefined;
};

export const validateEmail = (value: string) => {
  if (!value.trim()) {
    return "Email is required";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Enter a valid email address";
  }

  return undefined;
};

export const validateMobile = (value: string) => {
  if (!value.trim()) {
    return "Mobile number is required";
  }

  if (!/^[6-9]\d{9}$/.test(value)) {
    return "Enter a valid 10-digit mobile number";
  }

  return undefined;
};

export const validatePassword = (value: string) => {
  if (!value) {
    return "Password is required";
  }

  if (value.length < 8) {
    return "Password must be at least 8 characters";
  }

  if (!/[A-Z]/.test(value)) {
    return "Password must contain an uppercase letter";
  }

  if (!/[a-z]/.test(value)) {
    return "Password must contain a lowercase letter";
  }

  if (!/[0-9]/.test(value)) {
    return "Password must contain a number";
  }

  return undefined;
};