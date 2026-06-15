import { useState } from "react";
import { useLocations } from "../hooks/useLocations";
import LocationFilters from "../components/locations/LocationFilters";
import LocationsMap from "../components/map/LocationsMap";
import LocationList from "../components/locations/LocationList";
import { useFilteredLocations } from "../hooks/useFilteredLocations";
import { useVisibleLocations } from "../hooks/useVisibleLocations";
import { MapPin, GitBranch, Package, Boxes } from "lucide-react";

export default function MapRoute() {
  const { data: locations = [], isLoading, isError, error } = useLocations();
  const [bounds, setBounds] = useState(null);

  const filteredLocations = useFilteredLocations(locations);
  const visibleLocations = useVisibleLocations(filteredLocations, bounds);

  const branches = locations.filter((l) => l.type === "Branch").length;
  const lockers = locations.filter((l) => l.type === "Locker").length;
  const pickups = locations.filter((l) => l.type === "Pickup").length;

  if (isLoading) return <p className="text-muted-foreground text-sm">Loading locations...</p>;
  if (isError) return <p className="text-destructive text-sm">{error.message}</p>;

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex-1 flex gap-4 min-h-0">
        <div className="flex-1 flex flex-col gap-3 min-w-0">
          <LocationFilters />
          <div className="flex-1 rounded-xl overflow-hidden border border-border">
            <LocationsMap locations={filteredLocations} onBoundsChange={setBounds} />
          </div>
        </div>

        <div className="w-72 shrink-0 bg-white rounded-xl border border-border flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-border shrink-0">
            <p className="text-sm font-semibold">
              Visible locations{" "}
              <span className="text-muted-foreground font-normal">({visibleLocations.length})</span>
            </p>
          </div>
          <div className="flex-1 overflow-auto">
            <LocationList locations={visibleLocations} />
          </div>
        </div>
      </div>
    </div>
  );
}