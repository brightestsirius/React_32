import { useSearchParams } from "react-router";
import { SORT_OPTIONS } from "../../constants/locationFilters";

export default function LocationSort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "name";

  const handleChange = (event) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", event.target.value);
    setSearchParams(params);
  };

  return (
    <select
      value={sort}
      onChange={handleChange}
      className="text-sm text-muted-foreground bg-transparent outline-none cursor-pointer pr-1"
    >
      {Object.entries(SORT_OPTIONS).map(([value, option]) => (
        <option key={value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
