import { useQuery } from "@tanstack/react-query";
import { service } from "../services/todos";
import { QUERY_KEYS } from "./queryKeys";

export function useTodoQuery(id) {
  return useQuery({
    queryKey: QUERY_KEYS.TODO(id),
    queryFn: () => service.get(id),
    enabled: !!id,
    retry: false,
  });
}
