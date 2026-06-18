import { useQuery } from "@tanstack/react-query";
import { locationsApi } from "../api/locationsApi";
import { queryKeys } from "./queryKeys";

export function useLocations() {
  return useQuery({
    queryKey: queryKeys.locations,
    queryFn: () => locationsApi.get(),
    staleTime: Infinity,
  });
}
