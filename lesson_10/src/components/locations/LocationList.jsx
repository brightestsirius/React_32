import { useLocations } from "../../hooks/useLocations";
import { Link } from "react-router";

export default function LocationList() {
  const { data: locations = [], isLoading, isError, error } = useLocations();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return locations.length ? (
    <ul>
      {locations.map((item) => (
        <li key={item.id}>
          <Link to={`/dashboard/location/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
