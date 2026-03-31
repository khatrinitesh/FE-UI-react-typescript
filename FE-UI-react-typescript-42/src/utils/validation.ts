export const validateForm = (data: any) => {
  const errors: any = {};

  if (!data.fullname) errors.fullname = "Full name required";
  if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Invalid email";
  if (data.password.length < 6) errors.password = "Min 6 chars";

  return errors;
};
