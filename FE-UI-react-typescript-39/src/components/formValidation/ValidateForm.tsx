import type { FormDataValidation, FormErrors } from "../../interface";

export const validateForm = (form: FormDataValidation): FormErrors => {
  const errors: FormErrors = {};

  if (!form.email) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = "Invalid email format";
  }

  if (!form.password) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Minimum 6 characters required";
  }

  return errors;
};
