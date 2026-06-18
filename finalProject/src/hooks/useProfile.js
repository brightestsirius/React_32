import { useQuery } from "@tanstack/react-query";
import { usersApi } from "../api/usersApi";
import { useAuthStore } from "../store/authStore";
import { queryKeys } from "./queryKeys";

export function useProfile() {
  const user = useAuthStore((state) => state.user);

  return useQuery({
    queryKey: queryKeys.profile(user?.id),
    queryFn: () => usersApi.get(user.id),
    enabled: Boolean(user?.id),
  });
}
