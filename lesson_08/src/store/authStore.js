import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isAuth: false,
      toggleAuth: () => set((state) => ({ isAuth: !state.isAuth })),
    }),
    {
      name: `auth-store`,
    },
  ),
);
