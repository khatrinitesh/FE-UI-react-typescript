import type { UserTableFormatProps } from "../interface";

export const filterAndSortData = (
  data: UserTableFormatProps[],
  search: string,
  sortBy: keyof UserTableFormatProps,
  sortOrder: "asc" | "desc"
): UserTableFormatProps[] => {
  const filtered = data.filter((user) =>
    Object.values(user).some((value) =>
      String(value).toLowerCase().includes(search.toLowerCase())
    )
  );

  const sorted = [...filtered].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
};
