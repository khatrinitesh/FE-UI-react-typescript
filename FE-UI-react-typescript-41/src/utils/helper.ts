export const truncate = (text: string, len: number) =>
  text.length > len ? text.slice(0, len) + '...' : text;