import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersApi } from "../api/usersApi";
import { useAuthStore } from "../store/authStore";
import { queryKeys } from "./queryKeys";

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  const authUser = useAuthStore((state) => state.user);
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (payload) =>
      usersApi.put({
        id: authUser.id,
        ...payload,
      }),

    onSuccess: (updatedUser) => {
      const { password, ...safeUser } = updatedUser;

      setAuth(safeUser);

      queryClient.invalidateQueries({
        queryKey: queryKeys.profile(authUser.id),
      });
    },
  });
}
