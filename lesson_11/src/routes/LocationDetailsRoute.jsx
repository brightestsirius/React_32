import { useParams } from "react-router";

import { useLocation } from "../hooks/useLocation";

import LocationCard from "../components/locations/LocationCard";
import LocationMap from "../components/map/LocationMap";
import NavigateBtn from "../components/common/NavigateBtn";
import FavoriteButton from "../components/favorites/FavoriteButton";
import LocationShipmentsChart from "../components/analytics/LocationShipmentsChart";

export default function LocationDetailsRoute() {
  const { id } = useParams();

  const { data: location = {}, isLoading, isError, error } = useLocation(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h3>Location Details Route</h3>
      <NavigateBtn path="/dashboard/map">Back to Map</NavigateBtn>{" "}
      <FavoriteButton locationId={id} />
      <LocationCard location={location} />
      <LocationShipmentsChart location={location} />
      <LocationMap location={location} />
    </>
  );
}
