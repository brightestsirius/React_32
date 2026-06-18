import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favoriteIds: [],

      addFavorite: (id) =>
        set((state) => {
          if (state.favoriteIds.includes(id)) {
            return state;
          }

          return {
            favoriteIds: [...state.favoriteIds, id],
          };
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.filter((itemId) => itemId !== id),
        })),

      toggleFavorite: (id) => {
        const { favoriteIds, addFavorite, removeFavorite } = get();

        if (favoriteIds.includes(id)) {
          removeFavorite(id);
        } else {
          addFavorite(id);
        }
      },
    }),
    {
      name: "favorites-storage",
    },
  ),
);
