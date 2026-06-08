import { useQuery } from "@tanstack/react-query";
import { service } from "../api/locationsApi";
import { queryKeys } from "./queryKeys";

export function useLocations() {
  return useQuery({
    queryKey: queryKeys.locations,
    queryFn: () => service.get(),
    staleTime: Infinity,
  });
}
