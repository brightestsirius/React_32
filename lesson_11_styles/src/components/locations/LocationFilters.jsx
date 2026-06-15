import LocationSearch from "./LocationSearch";
import LocationSort from "./LocationSort";
import ResetFiltersBtn from "./ResetFiltersBtn";

export default function LocationFilters() {
  return (
    <div className="filters">
      <LocationSearch />
      <LocationSort />
      <ResetFiltersBtn />
    </div>
  );
}
