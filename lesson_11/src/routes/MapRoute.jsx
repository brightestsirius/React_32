import { useState } from "react";
import { useLocations } from "../hooks/useLocations";

import LocationFilters from "../components/locations/LocationFilters";
import LocationsMap from "../components/map/LocationsMap";
import LocationList from "../components/locations/LocationList";

import {useFilteredLocations} from "../hooks/useFilteredLocations";
import {useVisibleLocations} from "../hooks/useVisibleLocations";

export default function MapRoute() {
  const { data: locations = [], isLoading, isError, error } = useLocations();

  const [bounds, setBounds] = useState(null);

  const filteredLocations = useFilteredLocations(locations);
  const visibleLocations = useVisibleLocations(filteredLocations, bounds);

  if (isLoading) return <p>Loading locations...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <h3>Map Route</h3>

      <LocationFilters />
      <LocationList locations={visibleLocations} />
      <LocationsMap locations={visibleLocations} onBoundsChange={setBounds} />
    </>
  );
}
