import { useParams } from "react-router";
import { useLocation } from "../hooks/useLocation";
import NavigateBtn from "../components/common/NavigateBtn";
import LocationInfo from "../components/locations/LocationInfo";
import LocationShipmentsChart from "../components/analytics/LocationShipmentsChart";
import LocationMap from "../components/map/LocationMap";

export default function LocationDetailsRoute() {
  const { id } = useParams();
  const { data: location = {}, isLoading, isError, error } = useLocation(id);

  if (isLoading) return <p className="text-muted-foreground text-sm">Loading...</p>;
  if (isError) return <p className="text-destructive text-sm">{error.message}</p>;

  const hasData = Object.keys(location).length > 0;
  if (!hasData) return null;

  return (
    <div className="flex flex-col gap-6">
      <NavigateBtn path="/dashboard/map" showArrow className="self-start">
        Back to map
      </NavigateBtn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <LocationInfo location={location} locationId={id} />

          <div className="bg-white rounded-xl border border-border p-6">
            <LocationShipmentsChart location={location} />
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-auto lg:self-start">
          <LocationMap location={location} />
        </div>
      </div>
    </div>
  );
}
