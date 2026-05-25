import React from "react";
// 🌟🔄🟢🟡🔴

import TodoList from "./TodoList";
import TodosFilter from "./TodosFilter";
import TodosCustomize from "./TodosCustomize";
import TodosStatistics from "./TodosStatistics";

import useTodos from "../../hooks/useTodos";
import useTodosFilter from "../../hooks/useTodosFilter";
import useCustomize from "../../hooks/useCustomize";

export default function TodosBoard() {
  const { todos, handleChangeTodo } = useTodos();
  const { filter, setFilter } = useTodosFilter();
  const { color, setColor } = useCustomize();

  console.log(`🟢 in TodosBoard`);

  return (
    <>
      <TodoList
        todos={todos}
        handleChangeTodo={handleChangeTodo}
        filter={filter}
        color={color}
      />
      <hr />
      <TodosStatistics todos={todos} />
      <hr />
      <TodosFilter filter={filter} setFilter={setFilter} />
      <hr />
      <TodosCustomize color={color} setColor={setColor} />
    </>
  );
}
