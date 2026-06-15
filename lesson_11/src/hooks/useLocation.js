import { useQuery } from "@tanstack/react-query";
import { locationsApi } from "../api/locationsApi";
import { queryKeys } from "./queryKeys";

export function useLocation(id) {
  return useQuery({
    queryKey: queryKeys.location(id),
    queryFn: () => locationsApi.get(id),
    enabled: Boolean(id),
    retry: false,
    staleTime: Infinity,
  });
}
