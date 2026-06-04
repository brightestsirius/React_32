import { useQuery } from "@tanstack/react-query";
import { service } from "../services/bears";

export function useBearsQuery() {
  return useQuery({
    queryKey: ["bears"],
    queryFn: () => service.get(),
  });
}
