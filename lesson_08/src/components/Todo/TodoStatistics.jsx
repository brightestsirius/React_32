import { useTodosQuery } from "../../hooks/useTodosQuery";

export default function TodoStatistics() {
  const { data: todos = [], isLoading, isError, error } = useTodosQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      <li>All: {todos.length}</li>
      <li>Done: {todos.filter((todo) => todo.isDone).length}</li>
      <li>Not done: {todos.filter((todo) => !todo.isDone).length}</li>
    </ul>
  );
}
