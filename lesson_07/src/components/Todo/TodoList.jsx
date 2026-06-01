import { useSearchParams } from "react-router";
import { useRouteLoaderData, Link } from "react-router";

import { TODOS_FILTER } from "../../constants/todos";

export default function TodoList() {
  const todos = useRouteLoaderData(`todos`);
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

  return filteredTodos.length ? (
    <ul>
      {filteredTodos.map((item) => (
        <li key={item.id}>
          <Link to={item.id}>{item.title}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
