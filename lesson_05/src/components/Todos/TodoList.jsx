import { useMemo } from "react";
import { TODOS_FILTER } from "../../hooks/useTodosFilter";

export default function TodoList({ todos, handleChangeTodo, filter, color }) {
  console.log(`🔄 in TodoList`);
  const filteredTodos = useMemo(
    () =>
      [...todos].filter((todo) => {
        console.log(`in filter`);
        switch (filter) {
          case TODOS_FILTER.TODOS_FILTER_DONE:
            return todo.isDone;
          case TODOS_FILTER.TODOS_FILTER_NOT_DONE:
            return !todo.isDone;
          case TODOS_FILTER.TODOS_FILTER_ALL:
            return todo;
        }
      }),
    [filter, todos],
  );

  const sortedTodos = useMemo(
    () =>
      [...filteredTodos].sort((a, b) => {
        console.log(`in sorting`);
        return b.isDone - a.isDone;
      }),
    [filteredTodos],
  );

  return sortedTodos.length ? (
    <ul style={{ color }}>
      {sortedTodos.map((todo) => (
        <li key={todo.id}>
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
}
