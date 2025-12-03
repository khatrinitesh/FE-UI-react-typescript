// useBWImages.ts
import { useQuery } from "@tanstack/react-query";

export interface BWImageItem {
  id: number;
  author: string;
  url: string;
}

export function useBWImages() {
  return useQuery<BWImageItem[]>({
    queryKey: ["bw-images"],
    queryFn: async () => {
      const res = await fetch("https://picsum.photos/v2/list?page=2&limit=8");
      const data = await res.json();
      return data.map((img: any, i: number) => ({
        id: i,
        author: img.author,
        url: `https://picsum.photos/id/${img.id}/400/300?grayscale`,
      }));
    },
  });
}
