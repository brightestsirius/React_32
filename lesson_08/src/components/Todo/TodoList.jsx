import { useSearchParams } from "react-router";
import { Link } from "react-router";
import { useQueryTodos } from "../../hooks/useQueryTodos";

import { TODOS_FILTER } from "../../constants/todos";

export default function TodoList() {
  const { data: todos = [], isLoading, isError, error, refetch } = useQueryTodos();

  const [searchParams] = useSearchParams();
  const searchParamsFilter = searchParams.get(`filter`);

  const filteredTodos = searchParamsFilter
    ? todos.filter((todo) => {
        switch (searchParamsFilter) {
          case TODOS_FILTER.DONE:
            return todo.isDone;
          case TODOS_FILTER.NOT_DONE:
            return !todo.isDone;
          default:
            return todo;
        }
      })
    : todos;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return filteredTodos.length ? (
    <>
      {" "}
      <button onClick={refetch}>Refetch todos</button>{" "}
      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  ) : null;
}
