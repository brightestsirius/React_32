import { useMemo } from "react";

export function useVisibleLocations(locations, bounds) {
  const visibleLocations = useMemo(() => {
    if (!bounds) return locations;

    return locations.filter((location) =>
      bounds.contains([location.lat, location.lng]),
    );
  }, [locations, bounds]);

  return visibleLocations;
}
