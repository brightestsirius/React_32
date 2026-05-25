import { memo } from "react";
import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_DONE,
  TODOS_FILTER_NOT_DONE,
} from "../../../constants/todos";

export default memo(function TodoListFiltered({ filter, setFilter }) {
  console.log(`🔄 in TodoListFiltered`);

  return (
    <label>
      Select filter:{" "}
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value={TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER_DONE}>Done</option>
        <option value={TODOS_FILTER_NOT_DONE}>Not done</option>
      </select>
    </label>
  );
});
