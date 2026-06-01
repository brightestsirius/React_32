import { useLoaderData } from "react-router";

export default function TodosItem() {
  const todo = useLoaderData();
  return todo ? (
    <ul>
      <li>{todo.title}</li>
    </ul>
  ) : null;
}
