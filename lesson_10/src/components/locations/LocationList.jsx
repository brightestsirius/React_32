import { Link } from "react-router";

export default function LocationList({ locations }) {
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
