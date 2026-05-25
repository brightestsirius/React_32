import { memo } from "react";
import { TODOS_FILTER } from "../../hooks/useTodosFilter";

export default memo(function TodosFilter({ filter, setFilter }) {
  console.log(`🔄 in TodosFilter`);
  return (
    <label>
      Select todos filter:{" "}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value={TODOS_FILTER.TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER.TODOS_FILTER_DONE}>Done</option>
        <option value={TODOS_FILTER.TODOS_FILTER_NOT_DONE}>Not done</option>
      </select>
    </label>
  );
});
