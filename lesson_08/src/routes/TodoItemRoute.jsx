import React from "react";
import TodoItem from "../components/Todo/TodoItem";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";

export default function TodoItemRoute() {
  return (
    <>
      <h3>Todo Item Route</h3>
      <TodoItem />
      <NavigateBtn path="/todos">Back to todos</NavigateBtn>
    </>
  );
}
