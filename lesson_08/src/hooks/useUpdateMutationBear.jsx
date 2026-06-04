import { useMutation, useQueryClient } from "@tanstack/react-query";
import { service } from "../services/bears";

export function useUpdateMutationBear() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedBear) => service.put(updatedBear),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bears"] });
    },
  });
}
