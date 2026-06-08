import { useMutation } from "@tanstack/react-query";
import { authApi } from "../api/authApi";
import { useAuthStore } from "../store/authStore";

export function useRegister() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (payload) => authApi.register(payload),
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
    },
  });
}
