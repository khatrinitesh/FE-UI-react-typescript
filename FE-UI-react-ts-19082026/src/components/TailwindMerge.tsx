import { twMerge } from "tailwind-merge";

export default function TailwindMerge() {
  const className = twMerge("bg-blue-500 px-4 py-2 text-white", "bg-pink-500");

  return <button className={className}>Click Me</button>;
}
