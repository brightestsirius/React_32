import { Link } from "react-router";
import FavoriteButton from "./FavoriteButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Eye } from "lucide-react";

export default function FavoriteCard({ location }) {
  return (
    <li className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-sm transition-shadow">
      <div className="h-36 bg-gray-100 relative overflow-hidden">
        {location.image ? (
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <MapPin className="size-8 text-muted-foreground opacity-30" />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <FavoriteButton locationId={location.id} />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h4 className="font-semibold text-sm leading-tight">{location.name}</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-2">{location.address}</p>

        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-[10px] h-4 px-1.5">
            {location.type}
          </Badge>
          {location.rating && (
            <span className="flex items-center gap-0.5 text-xs text-amber-500 font-medium">
              <Star className="size-3 fill-amber-400" />
              {location.rating}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex-1 text-xs h-7" asChild>
            <Link to={`/dashboard/location/${location.id}`}>
              <Eye className="size-3" />
              View on map
            </Link>
          </Button>
        </div>
      </div>
    </li>
  );
}
