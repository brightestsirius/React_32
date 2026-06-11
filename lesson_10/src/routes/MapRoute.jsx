import { useMemo, useState } from "react";

import { useLocations } from "../hooks/useLocations";
import LocationList from "../components/locations/LocationList";
import LocationsMap from "../components/map/LocationsMap";

export default function MapRoute() {
  const [bounds, setBounds] = useState(null);

  const { data: locations = [], isLoading, isError, error } = useLocations();

  const visibleLocations = useMemo(() => {
    if (!bounds) return locations;

    return locations.filter((location) =>
      bounds.contains([location.lat, location.lng]),
    );
  }, [locations, bounds]);

  if (isLoading) return <p>Loading locations...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h3>Map Route</h3>

      <p>Visible locations: {visibleLocations.length}</p>
      <LocationList locations={visibleLocations} />

      <LocationsMap locations={visibleLocations} onBoundsChange={setBounds} />
    </>
  );
}
