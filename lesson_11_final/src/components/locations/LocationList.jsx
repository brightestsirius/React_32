import { Link } from "react-router";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LocationList({ locations }) {
  if (!locations.length) return (
    <div className="flex flex-col items-center justify-center h-32 text-muted-foreground text-sm gap-2">
      <MapPin className="size-6 opacity-40" />
      <p>No locations found</p>
    </div>
  );

  return (
    <ul className="divide-y divide-border">
      {locations.map((loc) => (
        <li key={loc.id}>
          <Link
            to={`/dashboard/location/${loc.id}`}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
          >
            <div className="size-10 rounded-lg bg-gray-100 shrink-0 overflow-hidden">
              {loc.photo ? (
                <img src={loc.photo} alt={loc.name} className="size-full object-cover" />
              ) : (
                <div className="size-full flex items-center justify-center">
                  <MapPin className="size-4 text-muted-foreground" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                {loc.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">{loc.address}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <Badge variant="secondary" className="text-[10px] h-4 px-1.5">
                  {loc.type}
                </Badge>
                {loc.rating && (
                  <span className="flex items-center gap-0.5 text-[10px] text-amber-500">
                    <Star className="size-2.5 fill-amber-500" />
                    {loc.rating}
                  </span>
                )}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
