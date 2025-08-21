import type { Fruit } from "../interface";

export function reverseWords(input: string): string {
  return input
    .split(" ") // Split into words
    .map((word) => word.split("").reverse().join("")) // Reverse each word
    .join(" "); // Join back with spaces
}

export function countCharacters(input: string): number {
  return input.length;
}

// Finds the maximum numeric value in an object
export function findMaxValue(obj: Record<string, number>): number | null {
  const values = Object.values(obj);
  if (values.length === 0) return null;
  return Math.max(...values);
}

export function repeatify(str: string, times: number): string {
  return str.repeat(times);
}

export function removeCharacter(input: string, charToRemove: string): string {
  const escapedChar = charToRemove.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape regex special chars
  const regex = new RegExp(escapedChar, "g");
  return input.replace(regex, "");
}

export function areAnagrams(str1: string, str2: string): boolean {
  const format = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");

  return format(str1) === format(str2);
}

export function toCamelCase(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "") // remove special characters
    .split(" ")
    .filter(Boolean)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

export function sumFruits(fruits: Fruit[]): number {
  return fruits.reduce((total, fruit) => total + fruit.quantity, 0);
}
