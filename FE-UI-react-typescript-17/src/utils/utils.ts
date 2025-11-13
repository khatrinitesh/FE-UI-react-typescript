export const getUsernameFromEmail = (email: string): string => {
  if (!email.includes("@")) return email;
  return email.split("@")[0];
};

export const getFullNameFromEmail = (email: string): string => {
  const username = email.split("@")[0];

  // Replace underscores/dots with space
  const cleaned = username.replace(/[_\.]/g, " ");

  // Capitalize each word
  const capitalized = cleaned
    .split(" ")
    .filter(Boolean) // remove empty strings
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return capitalized;
};
