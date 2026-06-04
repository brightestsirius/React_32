import { useQuery } from "@tanstack/react-query";
import { service } from "../services/bears";
import {QUERY_KEYS} from "./queryKeys"

export function useBearsQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.BEARS,
    queryFn: () => service.get(),
  });
}
