import { useContext } from "react";
// 🌟🔄🟢🟡🔴

import TodoList from "./TodoList";
import TodosFilter from "./TodosFilter";
import TodosCustomize from "./TodosCustomize";
import TodosStatistics from "./TodosStatistics";

import useTodos from "../../hooks/useTodos";
import useTodosFilter from "../../hooks/useTodosFilter";
import useCustomize from "../../hooks/useCustomize";

import { UserContext } from "../../contexts/UserContext";
import { TodosContext } from "../../contexts/TodosContext";

export default function TodosBoard() {
  const todos = useTodos();
  const filter = useTodosFilter();
  const color = useCustomize();

  const { userStatus } = useContext(UserContext);

  return (
    <TodosContext.Provider value={{ ...todos, ...filter, ...color }}>
      <TodoList />
      {userStatus ? (
        <>
          <hr />
          <TodosStatistics />
          <hr />
          <TodosFilter />
          <hr />
          <TodosCustomize />
        </>
      ) : null}
    </TodosContext.Provider>
  );
}
