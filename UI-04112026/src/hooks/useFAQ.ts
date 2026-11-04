import { useQuery } from "@tanstack/react-query";
import { fetchFAQs } from "../servics/faq.service";

export const useFAQ = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFAQs,
  });
};
