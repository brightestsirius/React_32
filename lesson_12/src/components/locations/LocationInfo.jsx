import FavoriteButton from "../favorites/FavoriteButton";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Package, Building2 } from "lucide-react";

export default function LocationInfo({ location, locationId }) {
  return (
    <div className="bg-white rounded-xl border border-border overflow-hidden">
      {location.image && (
        <div className="h-52 overflow-hidden">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold mb-1">{location.name}</h1>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <MapPin className="size-3.5" />
              {location.address}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary">{location.type}</Badge>
            </div>
          </div>
          <FavoriteButton locationId={locationId} />
        </div>

        {location.rating && (
          <div className="flex items-center gap-1.5 mb-4">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold">{location.rating}</span>
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
          <StatItem icon={Package} label="Shipments" value={location.shipments ?? "—"} />
          <StatItem icon={Building2} label="City" value={location.city ?? "—"} />
        </div>

        {location.description && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm font-medium mb-1">About this location</p>
            <p className="text-sm text-muted-foreground">{location.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatItem({ icon: Icon, label, value }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-0.5 flex items-center gap-1">
        <Icon className="size-3" />
        {label}
      </p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}
