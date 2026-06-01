import React from "react";
import { useSearchParams } from "react-router";
import { TODOS_FILTER } from "../../constants/todos";

export default function TodosFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsFilter = searchParams.get(`filter`);

  const handleSetFilter = (e) => {
    setSearchParams({ filter: e.target.value });
  };

  return (
    <label>
      Filter todos:{" "}
      <select value={searchParamsFilter && searchParamsFilter}  onChange={handleSetFilter}>
        <option value={TODOS_FILTER.ALL}>All</option>
        <option value={TODOS_FILTER.DONE}>Done</option>
        <option value={TODOS_FILTER.NOT_DONE}>Not Done</option>
      </select>
    </label>
  );
}
