import { useRouteLoaderData } from "react-router";

export default function TodoStatistics() {
  const todos = useRouteLoaderData(`todos`);

  return (
    <ul>
      <li>All: {todos.length}</li>
      <li>Done: {todos.filter((todo) => todo.isDone).length}</li>
      <li>Not done: {todos.filter((todo) => !todo.isDone).length}</li>
    </ul>
  );
}
