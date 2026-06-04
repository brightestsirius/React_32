import { useQuery } from "@tanstack/react-query";
import { service } from "../services/bears";

export function useQueryBears() {
  return useQuery({
    queryKey: ["bears"],
    queryFn: () => service.get(),
    staleTime: Infinity
  });
}
