import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import TodosList from "../components/Todos/TodosList";
import TodosFilter from "../components/Todos/TodosFilter";

export default function TodosRoute() {
  return (
    <>
      <h3>Todos Route</h3>
      <TodosFilter />
      <ErrorBoundary fallbackRender={({ error }) => <p>{error.message}</p>}>
        <TodosList />
      </ErrorBoundary>
    </>
  );
}
