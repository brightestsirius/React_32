import { useLocation } from "../../hooks/useLocation";
import { useParams } from "react-router";
import { useFavouritesStore } from "../../store/favouritesStore";

export default function LocationCard() {
  const { id } = useParams();
  const { data: location = {}, isLoading, isError, error } = useLocation(id);

  const favouriteIds = useFavouritesStore((state) => state.favouriteIds);
  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite);

  const isFavourite = favouriteIds.includes(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return Object.keys(location).length ? (
    <ul>
      <li>{location.name}</li>
      <li>{location.address}</li>
      <li>
        <button onClick={() => toggleFavourite(id)}>
          {isFavourite ? `Remove from favourite` : `Add to favourite`}
        </button>
      </li>
    </ul>
  ) : null;
}
