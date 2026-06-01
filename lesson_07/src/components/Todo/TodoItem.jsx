import { useLoaderData } from "react-router";

export default function TodoItem() {
  const todo = useLoaderData();

  return todo ? (
    <ul>
      <li>{todo.title}</li>
      <li>{String(todo.isDone)}</li>
    </ul>
  ) : null;
}
