import { useLocations } from "../hooks/useLocations";
import { useFavoritesStore } from "../store/favoritesStore";
import FavoritesList from "../components/favorites/FavoritesList";

export default function FavoritesRoute() {
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const { data: locations = [], isLoading, isError, error } = useLocations();

  if (isLoading) return <p className="text-muted-foreground text-sm">Loading favorites...</p>;
  if (isError) return <p className="text-destructive text-sm">{error.message}</p>;

  const favoriteLocations = locations.filter((location) =>
    favoriteIds.includes(String(location.id)),
  );

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold">Favorites</h1>
        <p className="text-sm text-muted-foreground">Your saved locations</p>
      </div>
      <FavoritesList locations={favoriteLocations} />
    </div>
  );
}
