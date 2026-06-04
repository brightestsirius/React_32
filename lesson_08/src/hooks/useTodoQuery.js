import { useQuery } from "@tanstack/react-query";
import { service } from "../services/todos";

export function useTodoQuery(id) {
  return useQuery({
    queryKey: ["todos", id],
    queryFn: ({ queryKey }) => {
      const [, todoId] = queryKey;
      return service.get(todoId);
    },
    enabled: !!id,
    retry: false,
  });
}
