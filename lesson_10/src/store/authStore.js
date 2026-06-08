import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isAuth: false,
      user: null,
      accessToken: null,
      setAuth: (user, accessToken) => set({ user, accessToken, isAuth: true }),
      logout: () => set({ user: null, accessToken: null, isAuth: false }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
