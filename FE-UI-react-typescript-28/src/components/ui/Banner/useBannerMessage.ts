// useBannerMessage.ts
import { useQuery } from "@tanstack/react-query";

async function fetchBannerMessage() {
  const res = await fetch("https://dummyjson.com/quotes/random");
  const data = await res.json();
  return data.quote;
}

export function useBannerMessage() {
  return useQuery({
    queryKey: ["banner-message"],
    queryFn: fetchBannerMessage,
  });
}
