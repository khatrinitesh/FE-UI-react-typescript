export const isRequired = (value: string) =>
  value.trim() !== "";

export const isEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isNumeric = (value: string) =>
  !isNaN(Number(value));

export const minLength = (
  value: string,
  length: number
) => value.trim().length >= length;

export const maxLength = (
  value: string,
  length: number
) => value.trim().length <= length;

export const validateContactForm = (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const errors: Record<string, string> = {};

  if (!isRequired(data.name))
    errors.name = "Name is required.";

  else if (!minLength(data.name, 3))
    errors.name = "Minimum 3 characters.";

  if (!isRequired(data.email))
    errors.email = "Email is required.";

  else if (!isEmail(data.email))
    errors.email = "Invalid email address.";

  if (!isRequired(data.message))
    errors.message = "Message is required.";

  else if (!minLength(data.message, 10))
    errors.message = "Minimum 10 characters.";

  return errors;
};