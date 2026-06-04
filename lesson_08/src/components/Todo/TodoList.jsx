import { useSearchParams } from "react-router";
import { Link } from "react-router";
import { useTodosQuery } from "../../hooks/useTodosQuery";

import { filterTodos } from "../../utils/filterTodos";

export default function TodoList() {
  const { data: todos = [], isLoading, isError, error } = useTodosQuery();

  const [searchParams] = useSearchParams();
  const searchParamsFilter = searchParams.get(`filter`);

  const filteredTodos = filterTodos(todos, searchParamsFilter);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

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
