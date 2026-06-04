import { useQuery } from "@tanstack/react-query";
import { service } from "../services/todos";
import { QUERY_KEYS } from "./queryKeys";

export function useTodosQuery() {
  return useQuery({
    queryKey: QUERY_KEYS.TODOS,
    queryFn: () => service.get(),
    staleTime: 60_000,
  });
}
