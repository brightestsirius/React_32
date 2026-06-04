import { useMutation, useQueryClient } from "@tanstack/react-query";
import { service } from "../services/bears";

export function useUpdateBearMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updated) => service.put(updated),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bears"] });
    },
  });
}
