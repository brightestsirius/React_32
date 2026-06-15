import { useFavoritesStore } from "../../store/favoritesStore";

export default function FavoriteButton({ locationId }) {
  const isFavorite = useFavoritesStore((state) =>
    state.favoriteIds.includes(String(locationId)),
  );

  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <button onClick={() => toggleFavorite(String(locationId))}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}
