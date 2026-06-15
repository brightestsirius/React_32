import { Link } from "react-router";
import FavoriteButton from "./FavoriteButton";

export default function FavoriteCard({ location }) {
  return (
    <li>
      <h4>{location.name}</h4>
      <p>{location.address}</p>
      <p>Type: {location.type}</p>
      <p>Rating: {location.rating}</p>
      <Link to={`/dashboard/location/${location.id}`}>View details</Link>{" "}
      <FavoriteButton locationId={location.id} />
    </li>
  );
}
