import { useQuery } from "@tanstack/react-query";

export interface BentoItem {
  id: number;
  title: string;
  image: string;
}

export function useBentoItems() {
  return useQuery<BentoItem[]>({
    queryKey: ["bento-items"],
    queryFn: async () => {
      const res = await fetch("https://picsum.photos/v2/list?page=2&limit=8");
      const data = await res.json();
      return data.map((img: any, i: number) => ({
        id: i,
        title: img.author,
        image: img.download_url,
      }));
    },
  });
}
