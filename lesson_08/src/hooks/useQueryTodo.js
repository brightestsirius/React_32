import { useQuery } from "@tanstack/react-query";
import { service } from "../services/todos";

export function useQueryTodo(id) {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => service.get(id),
  });
}
