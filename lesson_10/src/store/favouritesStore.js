import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavouritesStore = create(
  persist(
    (set, get) => ({
      favouriteIds: [],
      toggleFavourite: (id) =>
        set(() => {
          const { favouriteIds } = get();
          if (favouriteIds.includes(id)) {
            return {
              favouriteIds: favouriteIds.filter((item) => item !== id),
            };
          } else {
            return { favouriteIds: [...favouriteIds, id] };
          }
        }),
    }),
    {
      name: "favourites-storage",
    },
  ),
);
