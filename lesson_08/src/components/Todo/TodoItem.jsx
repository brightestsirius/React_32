import { useParams } from "react-router";
import { useTodoQuery } from "../../hooks/useTodoQuery";

export default function TodoItem() {
  const { id } = useParams();
  const { data: todo, isLoading, isError, error } = useTodoQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return todo ? (
    <ul>
      <li>{todo.title}</li>
      <li>{String(todo.isDone)}</li>
    </ul>
  ) : null;
}
