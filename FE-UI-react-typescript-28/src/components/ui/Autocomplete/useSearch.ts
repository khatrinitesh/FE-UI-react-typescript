// useSearch.ts
import { useQuery } from "@tanstack/react-query";
import { useAutocompleteStore } from "../../../store/useAutocompleteStore";

async function fetchSearch(query: string) {
  if (!query) return [];
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await res.json();
  return data.products;
}

export function useSearch() {
  const query = useAutocompleteStore((s) => s.query);

  return useQuery({
    queryKey: ["autocomplete", query],
    queryFn: () => fetchSearch(query),
    enabled: query.length > 0,
  });
}
