import { useQuery } from "@tanstack/react-query";
import { useSearchStore } from "../store/useAnimateSearchStore";

async function fetchSearch(query: string) {
  if (!query) return [];
  const res = await fetch(`https://api.example.com/search?q=${query}`);
  return res.json();
}

export function useSearch() {
  const query = useSearchStore((s) => s.query);

  return useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchSearch(query),
    enabled: query.length > 1, // prevent empty calls
  });
}
