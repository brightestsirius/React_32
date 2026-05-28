import { useMemo, memo, useContext } from "react";
import { TODOS_FILTER } from "../../hooks/useTodosFilter";
import { TodosContext } from "../../contexts/TodosContext";

export default memo(function TodoList() {
  const { todos, handleChangeTodo, filter, color } = useContext(TodosContext);

  const filteredTodos = useMemo(
    () =>
      [...todos].filter((todo) => {
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
});
