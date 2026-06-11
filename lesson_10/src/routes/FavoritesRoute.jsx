import { useLocations } from "../hooks/useLocations";
import { useFavoritesStore } from "../store/favoritesStore";

import FavoritesList from "../components/favorites/FavoritesList";

export default function FavoritesRoute() {
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);

  const { data: locations = [], isLoading, isError, error } = useLocations();

  if (isLoading) return <p>Loading favorites...</p>;
  if (isError) return <p>{error.message}</p>;

  const favoriteLocations = locations.filter((location) =>
    favoriteIds.includes(String(location.id)),
  );

  return (
    <>
      <h3>Favorites Route</h3>

      <FavoritesList locations={favoriteLocations} />
    </>
  );
}
