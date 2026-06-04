import { useQueryTodo } from "../../hooks/useQueryTodo";
import { useParams } from "react-router";

export default function TodoItem() {
  const { id } = useParams();
  const { data: todo, isLoading, isError, error } = useQueryTodo(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return todo ? (
    <ul style={{ border: `1px solid black` }}>
      <li>{todo.title}</li>
      <li>{String(todo.isDone)}</li>
    </ul>
  ) : null;
}
