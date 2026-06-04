import { useBearsStore } from "../../store/useBearsStore";
import { useQueryTodos } from "../../hooks/useQueryTodos";

export default function TodoStatistics() {
  const { data: todos = [], isLoading, isError, error } = useQueryTodos();
  const bears = useBearsStore((state) => state.bears);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      <li>All: {todos.length}</li>
      <li>Done: {todos.filter((todo) => todo.isDone).length}</li>
      <li>Not done: {todos.filter((todo) => !todo.isDone).length}</li>
      <li>Bears: {bears}</li>
    </ul>
  );
}
