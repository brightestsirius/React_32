import { useQuery } from "@tanstack/react-query";
import { service } from "../services/todos";

export function useQueryTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => service.get(),
    staleTime: Infinity
  });
}
