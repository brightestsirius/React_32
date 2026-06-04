import { useQuery } from "@tanstack/react-query";
import { service } from "../services/todos";

export function useTodosQuery() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => service.get(),
    staleTime: 60_000,
  });
}
