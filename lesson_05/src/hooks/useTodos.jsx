import { use, useState, useCallback } from "react";
import { service } from "../services/todos";

export default function useTodos() {
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

  return { todos, handleChangeTodo };
}
