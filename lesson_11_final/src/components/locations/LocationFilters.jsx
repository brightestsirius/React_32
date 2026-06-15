import LocationSearch from "./LocationSearch";
import LocationSort from "./LocationSort";
import ResetFiltersBtn from "./ResetFiltersBtn";

export default function LocationFilters() {
  return (
    <div className="flex items-center gap-2 bg-white rounded-xl border border-border px-3 py-2 shrink-0">
      <LocationSearch />
      <div className="w-px h-5 bg-border" />
      <LocationSort />
      <div className="ml-auto">
        <ResetFiltersBtn />
      </div>
    </div>
  );
}
