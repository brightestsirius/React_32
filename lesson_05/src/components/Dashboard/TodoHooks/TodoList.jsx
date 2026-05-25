import { memo, useMemo } from "react";
import {
  TODOS_FILTER_DONE,
  TODOS_FILTER_NOT_DONE,
} from "../../../constants/todos";

export default memo(function TodoList({
  todos,
  color,
  handleChangeTodo,
  filter,
}) {
  console.log(`🔄 in TodoList`);

  const filteredTodo = useMemo(
    () =>
      [...todos].filter((todo) => {
        console.log(`filtering`);
        switch (filter) {
          case TODOS_FILTER_DONE:
            return todo.isDone;
          case TODOS_FILTER_NOT_DONE:
            return !todo.isDone;
          default:
            return todo;
        }
      }),
    [filter, todos],
  );

  const sortedTodos = useMemo(
    () =>
      [...filteredTodo].sort((a, b) => {
        console.log(`sorting`);
        return b.isDone - a.isDone;
      }),
    [filteredTodo],
  );

  return sortedTodos.length ? (
    <ul>
      {sortedTodos.map((todo) => (
        <li key={todo.id} style={{ color }}>
          {todo.title}{" "}
          <input
            type="checkbox"
            checked={todo.isDone}
            onChange={(e) =>
              handleChangeTodo({ ...todo, isDone: e.target.checked })
            }
          />
        </li>
      ))}
    </ul>
  ) : null;
});
