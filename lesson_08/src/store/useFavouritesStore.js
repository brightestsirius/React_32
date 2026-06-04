import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavouritesStore = create(
  persist(
    (set, get) => ({
      favouriteIds: [],
      toggleFavourite: (id) => {
        const { favouriteIds } = get();
        set({
          favouriteIds: favouriteIds.includes(id)
            ? favouriteIds.filter((todoId) => todoId !== id)
            : [...favouriteIds, id],
        });
      },
    }),
    {
      name: "favorites-store",
    },
  ),
);
