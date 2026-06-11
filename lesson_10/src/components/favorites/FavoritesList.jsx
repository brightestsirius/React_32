import FavoriteCard from "./FavoriteCard";

export default function FavoritesList({ locations }) {
  if (!locations.length) {
    return <p>No favorite locations yet.</p>
  }

  return (
    <ul>
      {locations.map((location) => (
        <FavoriteCard key={location.id} location={location} />
      ))}
    </ul>
  );
}
