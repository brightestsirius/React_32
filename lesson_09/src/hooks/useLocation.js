import { useQuery } from "@tanstack/react-query";
import { service } from "../api/locationsApi";
import { queryKeys } from "./queryKeys";

export function useLocation(id) {
  return useQuery({
    queryKey: queryKeys.location(id),
    queryFn: () => service.get(id),
    enabled: Boolean(id),
    retry: false,
    staleTime: Infinity,
  });
}
