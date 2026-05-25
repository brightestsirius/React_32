import React from "react";
import "./style.sass";
// 🌟🔄🟢🟡🔴
import TodoList from "./TodoList";
import TodoListFiltered from "./TodoListFiltered";
import TodoListCustomize from "./TodoListCustomize";

import useTodos from "../../../hooks/useTodos";
import useCustomize from "../../../hooks/useCustomize";
import useFilter from "../../../hooks/useFilter";

export default function TodoHooks() {
  const { todos, handleChangeTodo } = useTodos();
  const { color, setColor } = useCustomize();
  const { filter, setFilter } = useFilter();

  console.log(`🟢 in TodoHooks`);

  return (
    <>
      <TodoList
        todos={todos}
        color={color}
        filter={filter}
        handleChangeTodo={handleChangeTodo}
      />
      <hr />
      <TodoListFiltered filter={filter} setFilter={setFilter} />
      <hr />
      <TodoListCustomize color={color} setColor={setColor} />
    </>
  );
}
