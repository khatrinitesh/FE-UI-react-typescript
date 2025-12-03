// useAvatars.ts
import { useQuery } from "@tanstack/react-query";

async function fetchAvatars() {
  const res = await fetch("https://randomuser.me/api/?results=8");
  const data = await res.json();
  return data.results.map((u: any, i: number) => ({
    id: i,
    name: `${u.name.first} ${u.name.last}`,
    image: u.picture.large,
  }));
}

export function useAvatars() {
  return useQuery({
    queryKey: ["avatars"],
    queryFn: fetchAvatars,
  });
}
