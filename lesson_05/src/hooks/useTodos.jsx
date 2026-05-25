import { use, useState, useCallback, useMemo } from "react";
import { service } from "../services/todos";
import { TODOS_FILTER_DONE, TODOS_FILTER_NOT_DONE } from "../constants/todos";

export default function useTodos(filter) {
  const initialTodos = use(service.usePromise);
  const [todos, setTodos] = useState(initialTodos);

  const handleChangeTodo = useCallback(async (todo) => {
    try {
      const updatedTodo = await service.put(todo);
      setTodos((prevState) =>
        prevState.map((item) => {
          return item.id === updatedTodo.id ? updatedTodo : item;
        }),
      );
    } catch (error) {
      console.log(error.messsage);
    }
  }, []);

  const filteredTodo = useMemo(
    () =>
      [...todos].filter((todo) => {
        console.log(`filtering`);
        switch (filter) {
          case TODOS_FILTER_DONE:
            return todo.isDone;
          case TODOS_FILTER_NOT_DONE:
            return !todo.isDone;
          default:
            return todo;
        }
      }),
    [filter, todos],
  );

  const sortedTodos = useMemo(
    () =>
      [...filteredTodo].sort((a, b) => {
        console.log(`sorting`);
        return b.isDone - a.isDone;
      }),
    [filteredTodo],
  );

  return { todos, sortedTodos, handleChangeTodo };
}
