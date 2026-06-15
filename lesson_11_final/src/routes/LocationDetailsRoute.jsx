import { useParams } from "react-router";
import { useLocation } from "../hooks/useLocation";
import LocationMap from "../components/map/LocationMap";
import NavigateBtn from "../components/common/NavigateBtn";
import FavoriteButton from "../components/favorites/FavoriteButton";
import LocationShipmentsChart from "../components/analytics/LocationShipmentsChart";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Package, Clock, Phone, Building2, ArrowLeft } from "lucide-react";

export default function LocationDetailsRoute() {
  const { id } = useParams();
  const { data: location = {}, isLoading, isError, error } = useLocation(id);

  if (isLoading) return <p className="text-muted-foreground text-sm">Loading...</p>;
  if (isError) return <p className="text-destructive text-sm">{error.message}</p>;

  const hasData = Object.keys(location).length > 0;
  if (!hasData) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <NavigateBtn path="/dashboard/map" showArrow>
          Back to map
        </NavigateBtn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="bg-white rounded-xl border border-border p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-xl font-bold mb-1">{location.name}</h1>
                <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  {location.address}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="secondary">{location.type}</Badge>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                </div>
              </div>
              <FavoriteButton locationId={id} />
            </div>

            {location.rating && (
              <div className="flex items-center gap-1.5 mb-4">
                <Star className="size-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold">{location.rating}</span>
                <span className="text-xs text-muted-foreground">(152 reviews)</span>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
              <StatItem icon={Package} label="Shipments" value={location.shipments ?? "—"} />
              <StatItem icon={Clock} label="Working hours" value={location.workingHours ?? "08:00 - 20:00"} />
              <StatItem icon={Phone} label="Phone" value={location.phone ?? "—"} />
              <StatItem icon={Building2} label="City" value={location.city ?? "—"} />
            </div>

            {location.description && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium mb-1">About this location</p>
                <p className="text-sm text-muted-foreground">{location.description}</p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl border border-border p-6">
            <LocationShipmentsChart location={location} />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-auto">
          <LocationMap location={location} />
        </div>
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
