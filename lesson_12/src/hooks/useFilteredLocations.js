import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { SORT_OPTIONS } from "../constants/locationFilters";

export function useFilteredLocations(locations) {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "name";

  return useMemo(() => {
    const searchedLocations = locations.filter((location) =>
      location.name.toLowerCase().includes(search.toLowerCase()),
    );

    const compareFn =
      SORT_OPTIONS[sort]?.compareFn ?? SORT_OPTIONS.name.compareFn;

    return [...searchedLocations].sort(compareFn);
  }, [locations, search, sort]);
}
