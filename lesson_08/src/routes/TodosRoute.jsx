import { ErrorBoundary } from "react-error-boundary";
import TodoList from "../components/Todo/TodoList";
import TodosFilter from "../components/Todo/TodosFilter";

export default function TodosRoute() {
  return (
    <>
      <h3>Todos Route</h3>
      <TodosFilter />
      <ErrorBoundary fallbackRender={({ error }) => <p>{error.message}</p>}>
        <TodoList />
      </ErrorBoundary>
    </>
  );
}
