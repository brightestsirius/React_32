import { useMutation } from "@tanstack/react-query";
import { service } from "../api/authApi";
import { useAuthStore } from "./../store/authStore";

export function useRegister() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (credentials) => service.register(credentials),
    onSuccess: (data) => {
      setAuth(data.user, data.accessToken);
    },
  });
}
