import FavoriteCard from "./FavoriteCard";
import { Star } from "lucide-react";

export default function FavoritesList({ locations }) {
  if (!locations.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-3">
        <Star className="size-10 opacity-30" />
        <p className="text-sm">No favorite locations yet.</p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {locations.map((location) => (
        <FavoriteCard key={location.id} location={location} />
      ))}
    </ul>
  );
}
