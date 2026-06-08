import { useLocations } from "../../hooks/useLocations";
import { Link } from "react-router";

export default function LocationList() {
  const { data: locations = [], isLoading, isError, error } = useLocations();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return locations.length ? (
    <ul>
      {locations.map((loc) => (
        <li key={loc.id}>
          <Link to={`/dashboard/location/${loc.id}`}>{loc.name}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
