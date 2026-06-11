export default function LocationCard({ location }) {
  return Object.keys(location).length ? (
    <ul>
      <li>{location.name}</li>
      <li>{location.address}</li>
    </ul>
  ) : null;
}
