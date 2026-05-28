import { memo, useContext } from "react";
import { TODOS_FILTER } from "../../hooks/useTodosFilter";
import { TodosContext } from "../../contexts/TodosContext";

export default memo(function TodosFilter() {
  const { filter, setFilter } = useContext(TodosContext);

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
