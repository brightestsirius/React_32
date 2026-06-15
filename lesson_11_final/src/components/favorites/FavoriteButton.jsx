import { useFavoritesStore } from "../../store/favoritesStore";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FavoriteButton({ locationId }) {
  const isFavorite = useFavoritesStore((state) =>
    state.favoriteIds.includes(String(locationId))
  );
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => toggleFavorite(String(locationId))}
      className={cn(
        "gap-1.5",
        isFavorite && "border-amber-300 text-amber-500 hover:text-amber-600 hover:border-amber-400"
      )}
    >
      <Star className={cn("size-3.5", isFavorite && "fill-amber-400")} />
      {isFavorite ? "Saved" : "Add to favorites"}
    </Button>
  );
}
