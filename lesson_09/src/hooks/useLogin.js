import { useMutation } from "@tanstack/react-query";
import { service } from "../api/authApi";
import { useAuthStore } from "./../store/authStore";

export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (credentials) => service.login(credentials),
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
    },
  });
}
