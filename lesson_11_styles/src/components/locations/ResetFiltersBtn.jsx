import { useSearchParams } from "react-router";

export default function ResetFiltersBtn() {
  const [, setSearchParams] = useSearchParams();

  return (
    <button type="button" onClick={() => setSearchParams({})}>
      Reset Filters
    </button>
  );
}
