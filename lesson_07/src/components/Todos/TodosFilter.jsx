import { useState } from "react";
import { useSearchParams } from "react-router";
import { TODOS_FILTER } from "../../constants/todos";

export default function TodosFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsFilter = searchParams.get(`filter`);
  const [filter, setFilter] = useState(searchParamsFilter ?? TODOS_FILTER.ALL);

  const handleSetFilter = (e) => {
    setFilter(e.target.value);
    setSearchParams({ filter: e.target.value });
  };

  return (
    <label>
      Filter todos:{" "}
      <select value={filter} onChange={handleSetFilter}>
        <option value={TODOS_FILTER.ALL}>All</option>
        <option value={TODOS_FILTER.DONE}>Done</option>
        <option value={TODOS_FILTER.NOT_DONE}>Not done</option>
      </select>
    </label>
  );
}
