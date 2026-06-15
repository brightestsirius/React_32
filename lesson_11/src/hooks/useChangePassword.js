import { useMutation } from "@tanstack/react-query";
import { usersApi } from "../api/usersApi";
import { useAuthStore } from "../store/authStore";

export function useChangePassword() {
  const authUser = useAuthStore((state) => state.user);

  return useMutation({
    mutationFn: async (formData) => {
      const user = await usersApi.get(authUser.id);

      if (user.password !== formData.currentPassword) {
        throw new Error("Current password is incorrect");
      }

      return usersApi.put({
        id: authUser.id,
        ...user,
        password: formData.newPassword,
      });
    },
  });
}