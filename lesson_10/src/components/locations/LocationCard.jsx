import { useLocation } from "../../hooks/useLocation";
import { useParams } from "react-router";

export default function LocationCard() {
  const { id } = useParams();
  const { data: location = {}, isLoading, isError, error } = useLocation(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return Object.keys(location).length ? (
    <ul>
      <li>{location.name}</li>
      <li>{location.address}</li>
    </ul>
  ) : null;
}
